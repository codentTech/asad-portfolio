"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Plus, Edit, Trash2, LogOut, Eye } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import ConfirmModal from "@/components/ui/ConfirmModal";
import { Project } from "@/types";
import { formatDate } from "@/lib/utils";
import toast from "react-hot-toast";

export default function AdminPortfolioPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const [deleteModal, setDeleteModal] = useState<{
    isOpen: boolean;
    project: Project | null;
  }>({
    isOpen: false,
    project: null,
  });
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    checkAuth();
    fetchProjects();
  }, []);

  const checkAuth = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      router.push("/admin/login");
      return;
    }
    setUser(user);
  };

  const fetchProjects = async () => {
    try {
      const response = await fetch("/api/projects");
      const data = await response.json();
      if (response.ok) {
        // Transform Supabase data to match Project interface
        const transformedProjects = (data.projects || []).map(
          (project: any) => ({
            id: project.id,
            title: project.title,
            slug: project.slug,
            description: project.description,
            longDescription: project.long_description,
            image: project.image,
            images: project.images || [],
            video: project.video,
            techStack: project.tech_stack || [],
            liveUrl: project.live_url,
            githubUrl: project.github_url,
            problem: project.problem,
            solution: project.solution,
            result: project.result,
            featured: project.featured || false,
            createdAt: project.created_at,
          })
        );
        setProjects(transformedProjects);
      } else {
        toast.error(data.error || "Failed to fetch projects");
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
      toast.error("Failed to fetch projects");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteClick = (project: Project) => {
    setDeleteModal({ isOpen: true, project });
  };

  const handleDeleteConfirm = async () => {
    if (!deleteModal.project) return;

    try {
      const response = await fetch(`/api/projects/${deleteModal.project.id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        toast.success("Project deleted successfully");
        fetchProjects();
      } else {
        const data = await response.json();
        toast.error(data.error || "Failed to delete project");
      }
    } catch (error) {
      console.error("Error deleting project:", error);
      toast.error("Failed to delete project");
    } finally {
      setDeleteModal({ isOpen: false, project: null });
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast.success("Logged out successfully");
    router.push("/admin/login");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-600 dark:text-gray-400">Loading...</div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Portfolio Management
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Manage your portfolio projects
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" onClick={handleLogout}>
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
              <Button asChild>
                <Link href="/admin/portfolio/new">
                  <Plus className="w-4 h-4 mr-2" />
                  New Project
                </Link>
              </Button>
            </div>
          </div>

          {/* Projects List */}
          {projects?.length === 0 ? (
            <Card className="p-12 text-center" disableAnimation>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                No projects yet. Create your first project!
              </p>
              <Button asChild>
                <Link href="/admin/portfolio/new">
                  <Plus className="w-4 h-4 mr-2" />
                  Create First Project
                </Link>
              </Button>
            </Card>
          ) : (
            <div className="grid gap-4">
              {projects.map((project) => (
                <Card key={project.id} className="p-6" disableAnimation>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {project.title}
                        </h3>
                        {project.featured && (
                          <span className="px-2 py-1 text-xs font-semibold rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
                            Featured
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                        <span>{formatDate(project.createdAt)}</span>
                        <span>•</span>
                        <span>
                          {project.techStack?.length || 0} technologies
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <Button variant="outline" size="sm" asChild>
                        <Link
                          href={`/portfolio/${project.slug}`}
                          target="_blank"
                        >
                          <Eye className="w-4 h-4" />
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/admin/portfolio/${project.id}/edit`}>
                          <Edit className="w-4 h-4" />
                        </Link>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDeleteClick(project)}
                        className="text-red-600 hover:text-red-700 dark:text-red-400"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      <ConfirmModal
        isOpen={deleteModal.isOpen}
        onClose={() => setDeleteModal({ isOpen: false, project: null })}
        onConfirm={handleDeleteConfirm}
        title="Delete Project"
        message={`Are you sure you want to delete "${deleteModal.project?.title}"? This action cannot be undone.`}
        confirmText="Delete"
        cancelText="Cancel"
        variant="danger"
      />
    </>
  );
}
