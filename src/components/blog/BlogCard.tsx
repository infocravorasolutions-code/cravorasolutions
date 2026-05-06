import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, Calendar } from 'lucide-react';
import { BlogPost } from '../../data/blogData';

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post, featured = false }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Link 
      to={`/blog/${post.slug}`}
      className={`group block rounded-2xl bg-white/80 shadow-xl border border-[#A259C6]/10 transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl cursor-pointer overflow-hidden ${
        featured ? 'md:col-span-2' : ''
      }`}
      style={{ boxShadow: '0 8px 32px 0 rgba(133,58,232,0.18)' }}
    >
      {/* Thumbnail */}
      <div className="relative h-48 md:h-64 overflow-hidden">
        <img 
          src={post.thumbnail} 
          alt={post.title}
          className="w-full h-full object-cover"
        />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full bg-white/90 text-[#A259C6] text-xs font-semibold backdrop-blur-sm">
            {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
          </span>
        </div>
        
        {/* Featured Badge */}
        {featured && (
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#A259C6] to-[#7B2FF2] text-white text-xs font-semibold">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Meta Information */}
        <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
          <div className="flex items-center gap-1">
            <User className="w-3 h-3" />
            <span>{post.author.name}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            <span>{formatDate(post.publishedAt)}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{post.readTime} min read</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg md:text-xl font-bold text-[#A259C6] mb-3 group-hover:text-[#7B2FF2] transition-colors">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-gray-600 text-sm md:text-base mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, 3).map(tag => (
            <span 
              key={tag} 
              className="px-2 py-1 rounded-full bg-[#F3EAFD] text-xs text-[#A259C6] font-semibold"
            >
              {tag}
            </span>
          ))}
          {post.tags.length > 3 && (
            <span className="px-2 py-1 rounded-full bg-gray-100 text-xs text-gray-500 font-semibold">
              +{post.tags.length - 3} more
            </span>
          )}
        </div>

        {/* Read More */}
        <div className="flex items-center justify-between">
          <span className="text-[#A259C6] font-semibold text-sm group-hover:text-[#7B2FF2] transition-colors">
            Read More →
          </span>
        </div>
      </div>
    </Link>
  );
}; 