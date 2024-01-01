import Layout from '../../layouts/BlogPost.astro';
import { blog } from './[blogId].astro';

<Fragment>
<Layout title={blog.title} url={blog.eyecatch.url} width={blog.eyecatch.width} height={blog.eyecatch.height}>
<main set: html={blog.content} />
</Layout>{`

<style

`}
</Fragment>;
