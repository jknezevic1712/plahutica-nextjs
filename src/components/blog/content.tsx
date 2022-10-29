import React from "react";
import { useAppContext } from "context/state";

import { Blogs } from "assets/blogs/blogs";

const Content: React.FC = () => {
  const context = useAppContext();
  const { activeBlogIdCtx } = context!;

  const showBlogContent = () => {
    let BlogContent = () => (
      <div>
        <h2>Error Page!</h2>
      </div>
    );
    let blogContentKey = null;

    Blogs.map((value, index) => {
      if (index === activeBlogIdCtx) {
        BlogContent = value;
        blogContentKey = index;
      }
    });

    if (BlogContent !== null && blogContentKey !== null)
      return <BlogContent key={blogContentKey} />;
  };

  return <>{showBlogContent()}</>;
};

export default Content;
