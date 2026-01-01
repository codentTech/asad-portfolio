"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Plus, Edit, Trash2, Eye } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import AdminLayout from "@/components/admin/AdminLayout";
import { motion } from "framer-motion";
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

  if (loading) {
    return (
      <AdminLayout
        title="Portfolio Management"
        description="Manage your portfolio projects"
      >
        <div className="flex items-center justify-center py-20">
          <div className="text-[#8892b0]">Loading...</div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <>
      <AdminLayout
        title="Portfolio Management"
        description="Manage your portfolio projects"
        actionButton={
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/admin/portfolio/new"
              className="px-4 py-2 bg-[#64ffda] text-[#0a192f] font-mono text-sm rounded transition-all hover:bg-[#52e0c4] flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              New Project
            </Link>
          </motion.div>
        }
      >
        {/* Projects List */}
        {projects?.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#112240] border border-[#233554] rounded-lg p-12 text-center"
          >
            <p className="text-[#8892b0] mb-6">
              No projects yet. Create your first project!
            </p>
            <Link
              href="/admin/portfolio/new"
              className="inline-flex items-center px-4 py-2 bg-[#64ffda] text-[#0a192f] font-mono text-sm rounded transition-all hover:bg-[#52e0c4]"
            >
              <Plus className="w-4 h-4 mr-2" />
              Create First Project
            </Link>
          </motion.div>
        ) : (
          <div className="grid gap-4">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-[#112240] border border-[#233554] rounded-lg p-6 hover:border-[#64ffda] transition-all"
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-[#ccd6f6]">
                        {project.title}
                      </h3>
                      {project.featured && (
                        <span className="px-2 py-1 text-xs font-semibold rounded bg-[#64ffda] text-[#0a192f] font-mono">
                          Featured
                        </span>
                      )}
                    </div>
                    <p className="text-[#8892b0] mb-3 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-[#8892b0] font-mono">
                      <span>{formatDate(project.createdAt)}</span>
                      <span className="text-[#233554]">•</span>
                      <span>{project.techStack?.length || 0} technologies</span>
                    </div>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <motion.a
                      href={`/portfolio/${project.slug}`}
                      target="_blank"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 border border-[#233554] text-white rounded hover:border-[#64ffda] hover:text-[#64ffda] transition-all"
                    >
                      <Eye className="w-4 h-4" />
                    </motion.a>
                    <motion.a
                      href={`/admin/portfolio/${project.id}/edit`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 border border-[#233554] text-white rounded hover:border-[#64ffda] hover:text-[#64ffda] transition-all"
                    >
                      <Edit className="w-4 h-4" />
                    </motion.a>
                    <motion.button
                      onClick={() => handleDeleteClick(project)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 border border-[#233554] text-red-400 rounded hover:border-red-400 hover:bg-red-400/10 transition-all"
                    >
                      <Trash2 className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </AdminLayout>

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
