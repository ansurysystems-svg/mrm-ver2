import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { Calendar, Clock, User, ArrowLeft, Share2, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { blogPosts } from "../data/blogPosts";

export default function BlogPostPage() {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((p) => p.id === Number(id));

  if (!post) {
    return (
      <div className="pt-40 pb-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
        <Link to="/blog">
          <Button variant="outline">Back to Blog</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Article Header */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center text-accent font-bold mb-8 hover:gap-2 transition-all group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>
          
          <div className="max-w-4xl">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-accent text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider"
            >
              {post.category}
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-black text-gray-900 mt-6 leading-tight"
            >
              {post.title}
            </motion.h1>
            
            <div className="flex flex-wrap items-center gap-6 mt-8 text-gray-500 font-medium">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent font-bold">
                  {post.author[0]}
                </div>
                <span className="text-gray-900">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-accent" />
                {post.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-accent" />
                {post.readTime}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8">
              <div className="aspect-video rounded-3xl overflow-hidden mb-12 luxury-shadow">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div 
                className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-600 prose-p:leading-relaxed prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              
              <div className="mt-16 pt-10 border-t flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Button variant="outline" size="sm" className="rounded-full gap-2">
                    <Share2 className="w-4 h-4" /> Share
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-full gap-2">
                    <Bookmark className="w-4 h-4" /> Save
                  </Button>
                </div>
                <div className="flex gap-2">
                  {["Legal", "Kenya", post.category].map(tag => (
                    <span key={tag} className="text-xs font-bold text-gray-400 uppercase tracking-widest">#{tag}</span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-4 space-y-12">
              <div className="p-8 bg-secondary/20 rounded-3xl sticky top-32">
                <h3 className="text-xl font-bold mb-6">Related Insights</h3>
                <div className="space-y-8">
                  {blogPosts.filter(p => p.id !== post.id).slice(0, 3).map(related => (
                    <Link key={related.id} to={`/blog/${related.id}`} className="group block">
                      <p className="text-xs font-bold text-accent uppercase tracking-widest mb-2">{related.category}</p>
                      <h4 className="font-bold text-gray-900 group-hover:text-accent transition-colors line-clamp-2">
                        {related.title}
                      </h4>
                    </Link>
                  ))}
                </div>
                <Link to="/blog">
                  <Button className="w-full mt-10 bg-gray-900 hover:bg-gray-800 text-white rounded-xl">
                    View All Posts
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
