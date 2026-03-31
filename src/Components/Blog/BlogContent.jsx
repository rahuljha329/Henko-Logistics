import React from "react";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const BlogContent = () => {
 const blogs = [
  {
    id: 1,
    title: "How AI is Transforming Logistics Industry",
    description:
      "Artificial Intelligence is helping logistics companies optimize routes, reduce costs, and improve delivery efficiency like never before.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800",
    category: "Technology",
    date: "April 10, 2025",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Green Logistics: The Future of Transportation",
    description:
      "Sustainable logistics practices like EV trucks and eco-friendly packaging are shaping the future of the supply chain.",
    image:
      "https://avatars.mds.yandex.net/i?id=cd626d679aae989c5a89be715a1d943668b664f4-4269827-images-thumbs&n=13", 
    category: "Sustainability",
    date: "March 25, 2025",
    readTime: "4 min read",
  },
  {
    id: 3,
    title: "Top Challenges in Supply Chain Management",
    description:
      "From global disruptions to rising fuel costs, explore the biggest challenges logistics companies face today.",
    image:
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800",
    category: "Supply Chain",
    date: "March 15, 2025",
    readTime: "6 min read",
  },
  {
      id: 4,
      title: "Last Mile Delivery: Key to Customer Satisfaction",
      description:
        "Efficient last-mile delivery ensures faster shipping and better customer experience in modern logistics.",
      image:
        "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800",
      category: "Delivery",
      date: "March 5, 2025",
      readTime: "4 min read",
    },
    {
      id: 5,
      title: "Role of Automation in Warehousing",
      description:
        "Automation tools and robotics are improving warehouse efficiency and reducing human errors drastically.",
      image:
        "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800",
      category: "Automation",
      date: "February 20, 2025",
      readTime: "5 min read",
    },
    {
      id: 6,
      title: "Importance of Real-Time Tracking in Logistics",
      description:
        "Real-time tracking systems provide transparency and help businesses monitor shipments effectively.",
      image:
        "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800",
      category: "Tracking",
      date: "February 10, 2025",
      readTime: "3 min read",
    },
  ];

  return (
    <section className="py-12 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Latest <span className="text-[#f94735]">Blog</span> & Insights
          </h2>
          <p className="text-gray-500 mt-2">
            Stay updated with logistics trends and industry news
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Meta */}
                <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                  <span className="bg-[#f94735] text-white px-2 py-1 rounded-full">
                    {blog.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={14} /> {blog.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-800 mb-2 hover:text-[#f94735] transition">
                  {blog.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4">
                  {blog.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1 text-xs text-gray-500">
                    <Clock size={14} /> {blog.readTime}
                  </span>

                  <button className="text-[#f94735] text-sm font-medium flex items-center gap-1 hover:gap-2 transition">
                    Read More <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BlogContent;