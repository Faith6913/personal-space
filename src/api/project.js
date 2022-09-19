import request from "@/api/request";
export default async function getProjects() {
    return await request.get("/api/project");
}