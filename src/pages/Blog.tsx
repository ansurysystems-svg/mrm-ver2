import { motion } from "motion/react";
import { Calendar, User, ArrowRight, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";

export default function BlogPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 lg:py-32 bg-secondary/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -z-10" />
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-accent font-bold tracking-widest uppercase text-sm"
            >
              Legal Insights
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-black text-gray-900 mt-6 leading-tight"
            >
              The MRM <br />
              <span className="text-accent italic font-serif">Advocates Blog</span>
            </motion.h1>
            <p className="mt-8 text-xl text-gray-600 leading-relaxed">
              Stay informed with the latest legal developments, expert analysis, and strategic advice from our seasoned legal professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full group border-none bg-secondary/20 hover:shadow-2xl transition-all duration-500 overflow-hidden rounded-3xl">
                  <div className="aspect-video overflow-hidden relative">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-md text-accent px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 text-xs text-gray-500 mb-6 font-medium">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-accent" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-accent" />
                        {post.readTime}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-accent transition-colors line-clamp-2 leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-8 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-6 border-t border-gray-200/50">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center text-accent font-bold text-xs">
                          {post.author[0]}
                        </div>
                        <span className="text-sm font-bold text-gray-900">{post.author}</span>
                      </div>
                      <Link to={`/blog/${post.id}`} className="text-accent group/btn flex items-center gap-2 font-bold text-sm">
                        Read More
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Newsletter CTA */}
          <div className="mt-32 p-12 lg:p-20 bg-gray-900 rounded-[3rem] relative overflow-hidden text-center lg:text-left">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]" />
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Subscribe to Legal Insights</h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Get the latest legal updates and firm news delivered directly to your inbox. Stay ahead of the curve.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-accent transition-colors"
                />
                <Button className="bg-accent hover:bg-accent/90 text-white px-10 py-4 h-auto rounded-2xl font-bold">
                  Subscribe Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
