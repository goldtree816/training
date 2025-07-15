import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function BlogCard({ post }) {
  const navigate = useNavigate();

  return (
    <div
      className="group cursor-pointer"
      onClick={() => navigate(`/blog/${post.id}`)}
    >
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        {/* Image */}
        <div className="relative h-48 sm:h-56 md:h-64">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div
            className={`absolute inset-0 bg-gradient-to-t ${post.gradient} opacity-30 group-hover:opacity-50 transition-opacity duration-300`}
          ></div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6">
          <h3 className="text-gray-800 font-bold text-base sm:text-lg md:text-xl leading-tight mb-3 group-hover:text-blue-600 transition-colors duration-300">
            {post.title}
          </h3>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4 line-clamp-3">
            {post.excerpt}
          </p>
          <div className="flex justify-between items-center">
            <span className="text-gray-500 text-xs md:text-sm">{post.date}</span>
            <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
              <ArrowRight className="w-4 h-4 text-blue-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}