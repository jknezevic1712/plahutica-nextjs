interface Blogs {
  blogs: {
    data: [
      {
        overview: {
          title: string;
          description: string;
        };
        content: {
          [key: string]: {
            [key: string]:
              | string
              | {
                  [key: string]: {
                    [key: string]:
                      | string
                      | {
                          [key: string]: string;
                        };
                  };
                };
          };
        };
      }
    ];
  };
}

interface Utils {
  utils: {
    activeBlogId: number;
  };
}

interface State extends Blogs, Utils {}
