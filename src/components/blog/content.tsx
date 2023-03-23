import React from "react";
import { useRouter } from "next/router";

import { Blogs } from "assets/blogs/blogs";

const Content: React.FC = () => {
  const router = useRouter();
  const { blogId } = router.query;

  const showBlogContent = () => {
    let BlogContent = () => (
      <div>
        <h2>Error Page!</h2>
      </div>
    );
    let blogContentKey = null;

    Blogs.map((value, index) => {
      if (blogId !== undefined && index === +blogId) {
        BlogContent = value;
        blogContentKey = index;
      }
    });

    if (BlogContent !== null && blogContentKey !== null && blogId !== undefined)
      return <BlogContent key={blogContentKey} />;
  };

  return <>{showBlogContent()}</>;
};

export default Content;
