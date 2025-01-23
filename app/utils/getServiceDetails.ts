import * as k8s from "@kubernetes/client-node";

type ExternalIpInfo = {
  externalIp: string | undefined;
  port: number;
};
export async function getServiceDetails(): Promise<ExternalIpInfo | undefined> {
  const kc = new k8s.KubeConfig();
  kc.loadFromDefault();

  const k8sApi = kc.makeApiClient(k8s.CoreV1Api);

  const namespace = "default";
  try {
    const res = await k8sApi.listNamespacedService({ namespace });
    const services = res.items;

    for (const service of services) {
      if (
        service.status?.loadBalancer?.ingress &&
        service.spec?.selector &&
        service.spec.selector["app"] === "account-management"
      ) {
        const externalIp = service.status.loadBalancer.ingress[0]?.ip;
        const ports = service.spec.ports || [];
        const port = ports.find((p) => p.port)?.port; // Find the first port (or adjust if specific)
        if (!port) {
          
          continue;
        }
  
        return { externalIp, port }; // Return the external IP if found
      } else {
        console.log("No external ip found");
      }
    }
  } catch (error) {
    console.error("Failed to list services:", error);
  }
}
