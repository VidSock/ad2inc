import React from 'react'
import { Link } from 'gatsby'

const PostCard = ({ posts }) => {
  return (
    <div className='container' style={{ borderRadius:'12px',}}>
      {posts
        .filter(post => post.node.frontmatter.templateKey === 'article-page')
        .map(({ node: post }) => (
          <div
            className='content'
            style={{ border: '0px solid #eaecee',  borderRadius:'12px', textAlign:'center', display:'flex' , justifyContent:'center', flexDirection:'column', alignContent:'center'}}
            key={post.id}
          >
<Link className='has-text-primary' style={{textDecoration:'none', textAlign:'center'}} to={post.fields.slug}>
<img src={post.frontmatter.cover} alt={post.frontmatter.title} style={{borderRadius:'12px', margin:'1rem auto 0 auto',}} />
</Link>

<div style={{ padding:'4%', textAlign:'left'}}><h2>{post.frontmatter.title}</h2>

            <p>
              {post.excerpt}
              <br />
              <br />
              <Link className='button is-small' to={post.fields.slug} style={{textAlign:'left',}}>
                                Keep Reading →
              </Link>
            </p>
            </div>
          </div>
        ))}
    </div>
  )
}

export default PostCard
