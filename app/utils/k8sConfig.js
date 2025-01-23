export async function getManagerPodIP() {
    const kc = new k8s.KubeConfig();
    kc.loadFromDefault();

    const k8sApi = kc.makeApiClient(k8s.CoreV1Api);
    const res = await k8sApi.listNamespacedPod(
        "default",
        undefined,
        undefined,
        undefined,
        undefined,
        "app=account-management"
    );

    if (!res.body.items.length) {
        throw new Error("No pod named app=account-management");
    }

    const managerPod = res.body.items[0];
    return `http://${managerPod.status?.podIP}:8090`;
}
