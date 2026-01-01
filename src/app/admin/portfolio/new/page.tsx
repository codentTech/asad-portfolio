"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Save, Plus, X } from "lucide-react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { generateSlug } from "@/lib/utils";
import toast from "react-hot-toast";

export default function NewProjectPage() {
  const [saving, setSaving] = useState(false);
  const [user, setUser] = useState<any>(null);
  const router = useRouter();
  const supabase = createClient();

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    description: "",
    longDescription: "",
    image: "",
    gallery: [] as string[],
    video: "",
    techStack: [] as string[],
    liveUrl: "",
    githubUrl: "",
    problem: "",
    solution: "",
    result: "",
    featured: false,
  });

  const [newGalleryImage, setNewGalleryImage] = useState("");
  const [newTech, setNewTech] = useState("");

  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    if (formData.title && !formData.slug) {
      setFormData((prev) => ({
        ...prev,
        slug: generateSlug(prev.title),
      }));
    }
  }, [formData.title]);

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

  const addGalleryImage = () => {
    if (newGalleryImage.trim()) {
      setFormData((prev) => ({
        ...prev,
        gallery: [...prev.gallery, newGalleryImage.trim()],
      }));
      setNewGalleryImage("");
    }
  };

  const removeGalleryImage = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      gallery: prev.gallery.filter((_, i) => i !== index),
    }));
  };

  const addTech = () => {
    if (newTech.trim()) {
      setFormData((prev) => ({
        ...prev,
        techStack: [...prev.techStack, newTech.trim()],
      }));
      setNewTech("");
    }
  };

  const removeTech = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      techStack: prev.techStack.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const response = await fetch("/api/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Project created successfully!");
        router.push("/admin/portfolio");
      } else {
        toast.error(data.error || "Failed to create project");
      }
    } catch (error) {
      console.error("Error creating project:", error);
      toast.error("Failed to create project. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <Link
          href="/admin/portfolio"
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Portfolio
        </Link>

        <Card className="p-8" disableAnimation>
          <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Create New Project
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Info */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Basic Information
              </h2>

              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Title *
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, title: e.target.value }))
                  }
                  required
                  className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Slug *
                </label>
                <input
                  type="text"
                  value={formData.slug}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      slug: generateSlug(e.target.value),
                    }))
                  }
                  required
                  className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  URL: /portfolio/{formData.slug || "your-slug"}
                </p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Short Description *
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      description: e.target.value,
                    }))
                  }
                  required
                  rows={2}
                  className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Long Description *
                </label>
                <textarea
                  value={formData.longDescription}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      longDescription: e.target.value,
                    }))
                  }
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            {/* Images & Media */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Images & Media
              </h2>

              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Featured Image URL *
                </label>
                <input
                  type="url"
                  value={formData.image}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, image: e.target.value }))
                  }
                  required
                  placeholder="https://example.com/image.jpg"
                  className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Main hero image displayed at the top of the project page
                </p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Gallery
                </label>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                  Add multiple images to display in the interactive gallery
                  section
                </p>
                <div className="flex gap-2 mb-2">
                  <input
                    type="url"
                    value={newGalleryImage}
                    onChange={(e) => setNewGalleryImage(e.target.value)}
                    onKeyPress={(e) =>
                      e.key === "Enter" &&
                      (e.preventDefault(), addGalleryImage())
                    }
                    placeholder="Gallery Image URL"
                    className="flex-1 px-4 py-2 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <Button
                    type="button"
                    onClick={addGalleryImage}
                    variant="outline"
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {formData.gallery.map((img, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center gap-2 px-3 py-1 bg-purple-100 dark:bg-purple-900/20 rounded-lg text-sm"
                    >
                      <span className="truncate max-w-xs">{img}</span>
                      <button
                        type="button"
                        onClick={() => removeGalleryImage(index)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Video URL (optional)
                </label>
                <input
                  type="url"
                  value={formData.video}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, video: e.target.value }))
                  }
                  className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            {/* Tech Stack */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Tech Stack
              </h2>
              <div className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={newTech}
                  onChange={(e) => setNewTech(e.target.value)}
                  onKeyPress={(e) =>
                    e.key === "Enter" && (e.preventDefault(), addTech())
                  }
                  placeholder="Technology name"
                  className="flex-1 px-4 py-2 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <Button type="button" onClick={addTech} variant="outline">
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {formData.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-100 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 rounded-lg text-sm"
                  >
                    {tech}
                    <button
                      type="button"
                      onClick={() => removeTech(index)}
                      className="text-indigo-600 hover:text-indigo-700"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Links
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Live URL
                  </label>
                  <input
                    type="url"
                    value={formData.liveUrl}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        liveUrl: e.target.value,
                      }))
                    }
                    className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    GitHub URL
                  </label>
                  <input
                    type="url"
                    value={formData.githubUrl}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        githubUrl: e.target.value,
                      }))
                    }
                    className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Project Details
              </h2>

              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Problem *
                </label>
                <textarea
                  value={formData.problem}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      problem: e.target.value,
                    }))
                  }
                  required
                  rows={3}
                  className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Solution *
                </label>
                <textarea
                  value={formData.solution}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      solution: e.target.value,
                    }))
                  }
                  required
                  rows={3}
                  className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Result *
                </label>
                <textarea
                  value={formData.result}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, result: e.target.value }))
                  }
                  required
                  rows={3}
                  className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            {/* Featured */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="featured"
                checked={formData.featured}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    featured: e.target.checked,
                  }))
                }
                className="w-4 h-4 rounded border-gray-300 dark:border-gray-600 text-indigo-600 focus:ring-indigo-500"
              />
              <label
                htmlFor="featured"
                className="text-sm font-semibold text-gray-700 dark:text-gray-300"
              >
                Featured (show on homepage)
              </label>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <Button type="submit" disabled={saving}>
                <Save className="w-4 h-4 mr-2" />
                {saving ? "Creating..." : "Create Project"}
              </Button>
              <Button type="button" variant="outline" asChild>
                <Link href="/admin/portfolio">Cancel</Link>
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}
