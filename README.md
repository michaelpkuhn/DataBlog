# DataBlog

This blog uses [Quarto's websites blog](https://quarto.org/docs/websites/website-blog.html#home-page) feature to generate and maintain data analysis blogs.

Blog posts are saved in the posts directory and references attributes set in the `qmd` file.

Data for all projects is saved locally to `data/` folder to avoid committing data to the git history. Published projects reference data saved in a Cloudflare R2 bucket.
