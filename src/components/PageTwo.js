import React from 'react'
import { AbsoluteWrapper } from './reusable';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: auto;
  width: 100%;
  color: #000;
  background: #d4d4d4;
  margin-top: 50px;
  margin-bottom: 50px;
  padding-bottom: 100px;
  h1{
    text-align: center;
    padding: 100px;
  }

  .scrollable{
    height: calc( 100vh - 50px); 
    overflow-y: auto;
    padding-bottom: 100px;
  }
`;

const PageTwo = () => {
  const scrollableDiv = React.useRef();

  React.useEffect(()=>{
    // adds the scroll class after section's animation
    setTimeout(()=>{
      scrollableDiv.current.classList.add('scrollable');

    }, 550)
  }, [])

 return (
    <AbsoluteWrapper>
      <Wrapper>
        <div ref={scrollableDiv} style={{overflowY: 'scroll'}}>
          <h1>Page two</h1>
          <div>Massive content here</div>
          
            
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, nostrum esse ea id quo quis dolore reprehenderit minus? Fugit, suscipit. Ea deserunt sunt alias molestias, maxime doloremque sequi, nemo dolore veritatis hic, dolorum vel itaque? Esse, magnam alias! Tenetur, quam distinctio culpa, excepturi deserunt illo corporis totam beatae est eos eius natus labore dolorum odit ipsum. Voluptate, recusandae animi quam sapiente assumenda debitis eum! Provident voluptas, nostrum ratione tempore voluptate modi nulla aut omnis nesciunt mollitia corporis quibusdam debitis quisquam rem. Aperiam est nihil, quod laboriosam quia a ipsum. Ipsum dolorem voluptatum esse architecto facilis nam doloremque autem dolorum sapiente velit! Optio corrupti ut alias cupiditate distinctio quam architecto? Neque, ratione facere dignissimos qui laborum accusantium officia dolorem blanditiis repudiandae aliquid rem, dolorum tempore animi. Vel quod aspernatur unde delectus officiis odit natus quae nam quo sit. Impedit debitis adipisci praesentium esse facilis, ea officia laboriosam fugiat id odit quod!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, nostrum esse ea id quo quis dolore reprehenderit minus? Fugit, suscipit. Ea deserunt sunt alias molestias, maxime doloremque sequi, nemo dolore veritatis hic, dolorum vel itaque? Esse, magnam alias! Tenetur, quam distinctio culpa, excepturi deserunt illo corporis totam beatae est eos eius natus labore dolorum odit ipsum. Voluptate, recusandae animi quam sapiente assumenda debitis eum! Provident voluptas, nostrum ratione tempore voluptate modi nulla aut omnis nesciunt mollitia corporis quibusdam debitis quisquam rem. Aperiam est nihil, quod laboriosam quia a ipsum. Ipsum dolorem voluptatum esse architecto facilis nam doloremque autem dolorum sapiente velit! Optio corrupti ut alias cupiditate distinctio quam architecto? Neque, ratione facere dignissimos qui laborum accusantium officia dolorem blanditiis repudiandae aliquid rem, dolorum tempore animi. Vel quod aspernatur unde delectus officiis odit natus quae nam quo sit. Impedit debitis adipisci praesentium esse facilis, ea officia laboriosam fugiat id odit quod!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, nostrum esse ea id quo quis dolore reprehenderit minus? Fugit, suscipit. Ea deserunt sunt alias molestias, maxime doloremque sequi, nemo dolore veritatis hic, dolorum vel itaque? Esse, magnam alias! Tenetur, quam distinctio culpa, excepturi deserunt illo corporis totam beatae est eos eius natus labore dolorum odit ipsum. Voluptate, recusandae animi quam sapiente assumenda debitis eum! Provident voluptas, nostrum ratione tempore voluptate modi nulla aut omnis nesciunt mollitia corporis quibusdam debitis quisquam rem. Aperiam est nihil, quod laboriosam quia a ipsum. Ipsum dolorem voluptatum esse architecto facilis nam doloremque autem dolorum sapiente velit! Optio corrupti ut alias cupiditate distinctio quam architecto? Neque, ratione facere dignissimos qui laborum accusantium officia dolorem blanditiis repudiandae aliquid rem, dolorum tempore animi. Vel quod aspernatur unde delectus officiis odit natus quae nam quo sit. Impedit debitis adipisci praesentium esse facilis, ea officia laboriosam fugiat id odit quod!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, nostrum esse ea id quo quis dolore reprehenderit minus? Fugit, suscipit. Ea deserunt sunt alias molestias, maxime doloremque sequi, nemo dolore veritatis hic, dolorum vel itaque? Esse, magnam alias! Tenetur, quam distinctio culpa, excepturi deserunt illo corporis totam beatae est eos eius natus labore dolorum odit ipsum. Voluptate, recusandae animi quam sapiente assumenda debitis eum! Provident voluptas, nostrum ratione tempore voluptate modi nulla aut omnis nesciunt mollitia corporis quibusdam debitis quisquam rem. Aperiam est nihil, quod laboriosam quia a ipsum. Ipsum dolorem voluptatum esse architecto facilis nam doloremque autem dolorum sapiente velit! Optio corrupti ut alias cupiditate distinctio quam architecto? Neque, ratione facere dignissimos qui laborum accusantium officia dolorem blanditiis repudiandae aliquid rem, dolorum tempore animi. Vel quod aspernatur unde delectus officiis odit natus quae nam quo sit. Impedit debitis adipisci praesentium esse facilis, ea officia laboriosam fugiat id odit quod!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, nostrum esse ea id quo quis dolore reprehenderit minus? Fugit, suscipit. Ea deserunt sunt alias molestias, maxime doloremque sequi, nemo dolore veritatis hic, dolorum vel itaque? Esse, magnam alias! Tenetur, quam distinctio culpa, excepturi deserunt illo corporis totam beatae est eos eius natus labore dolorum odit ipsum. Voluptate, recusandae animi quam sapiente assumenda debitis eum! Provident voluptas, nostrum ratione tempore voluptate modi nulla aut omnis nesciunt mollitia corporis quibusdam debitis quisquam rem. Aperiam est nihil, quod laboriosam quia a ipsum. Ipsum dolorem voluptatum esse architecto facilis nam doloremque autem dolorum sapiente velit! Optio corrupti ut alias cupiditate distinctio quam architecto? Neque, ratione facere dignissimos qui laborum accusantium officia dolorem blanditiis repudiandae aliquid rem, dolorum tempore animi. Vel quod aspernatur unde delectus officiis odit natus quae nam quo sit. Impedit debitis adipisci praesentium esse facilis, ea officia laboriosam fugiat id odit quod!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, nostrum esse ea id quo quis dolore reprehenderit minus? Fugit, suscipit. Ea deserunt sunt alias molestias, maxime doloremque sequi, nemo dolore veritatis hic, dolorum vel itaque? Esse, magnam alias! Tenetur, quam distinctio culpa, excepturi deserunt illo corporis totam beatae est eos eius natus labore dolorum odit ipsum. Voluptate, recusandae animi quam sapiente assumenda debitis eum! Provident voluptas, nostrum ratione tempore voluptate modi nulla aut omnis nesciunt mollitia corporis quibusdam debitis quisquam rem. Aperiam est nihil, quod laboriosam quia a ipsum. Ipsum dolorem voluptatum esse architecto facilis nam doloremque autem dolorum sapiente velit! Optio corrupti ut alias cupiditate distinctio quam architecto? Neque, ratione facere dignissimos qui laborum accusantium officia dolorem blanditiis repudiandae aliquid rem, dolorum tempore animi. Vel quod aspernatur unde delectus officiis odit natus quae nam quo sit. Impedit debitis adipisci praesentium esse facilis, ea officia laboriosam fugiat id odit quod!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, nostrum esse ea id quo quis dolore reprehenderit minus? Fugit, suscipit. Ea deserunt sunt alias molestias, maxime doloremque sequi, nemo dolore veritatis hic, dolorum vel itaque? Esse, magnam alias! Tenetur, quam distinctio culpa, excepturi deserunt illo corporis totam beatae est eos eius natus labore dolorum odit ipsum. Voluptate, recusandae animi quam sapiente assumenda debitis eum! Provident voluptas, nostrum ratione tempore voluptate modi nulla aut omnis nesciunt mollitia corporis quibusdam debitis quisquam rem. Aperiam est nihil, quod laboriosam quia a ipsum. Ipsum dolorem voluptatum esse architecto facilis nam doloremque autem dolorum sapiente velit! Optio corrupti ut alias cupiditate distinctio quam architecto? Neque, ratione facere dignissimos qui laborum accusantium officia dolorem blanditiis repudiandae aliquid rem, dolorum tempore animi. Vel quod aspernatur unde delectus officiis odit natus quae nam quo sit. Impedit debitis adipisci praesentium esse facilis, ea officia laboriosam fugiat id odit quod!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, nostrum esse ea id quo quis dolore reprehenderit minus? Fugit, suscipit. Ea deserunt sunt alias molestias, maxime doloremque sequi, nemo dolore veritatis hic, dolorum vel itaque? Esse, magnam alias! Tenetur, quam distinctio culpa, excepturi deserunt illo corporis totam beatae est eos eius natus labore dolorum odit ipsum. Voluptate, recusandae animi quam sapiente assumenda debitis eum! Provident voluptas, nostrum ratione tempore voluptate modi nulla aut omnis nesciunt mollitia corporis quibusdam debitis quisquam rem. Aperiam est nihil, quod laboriosam quia a ipsum. Ipsum dolorem voluptatum esse architecto facilis nam doloremque autem dolorum sapiente velit! Optio corrupti ut alias cupiditate distinctio quam architecto? Neque, ratione facere dignissimos qui laborum accusantium officia dolorem blanditiis repudiandae aliquid rem, dolorum tempore animi. Vel quod aspernatur unde delectus officiis odit natus quae nam quo sit. Impedit debitis adipisci praesentium esse facilis, ea officia laboriosam fugiat id odit quod!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, nostrum esse ea id quo quis dolore reprehenderit minus? Fugit, suscipit. Ea deserunt sunt alias molestias, maxime doloremque sequi, nemo dolore veritatis hic, dolorum vel itaque? Esse, magnam alias! Tenetur, quam distinctio culpa, excepturi deserunt illo corporis totam beatae est eos eius natus labore dolorum odit ipsum. Voluptate, recusandae animi quam sapiente assumenda debitis eum! Provident voluptas, nostrum ratione tempore voluptate modi nulla aut omnis nesciunt mollitia corporis quibusdam debitis quisquam rem. Aperiam est nihil, quod laboriosam quia a ipsum. Ipsum dolorem voluptatum esse architecto facilis nam doloremque autem dolorum sapiente velit! Optio corrupti ut alias cupiditate distinctio quam architecto? Neque, ratione facere dignissimos qui laborum accusantium officia dolorem blanditiis repudiandae aliquid rem, dolorum tempore animi. Vel quod aspernatur unde delectus officiis odit natus quae nam quo sit. Impedit debitis adipisci praesentium esse facilis, ea officia laboriosam fugiat id odit quod!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, nostrum esse ea id quo quis dolore reprehenderit minus? Fugit, suscipit. Ea deserunt sunt alias molestias, maxime doloremque sequi, nemo dolore veritatis hic, dolorum vel itaque? Esse, magnam alias! Tenetur, quam distinctio culpa, excepturi deserunt illo corporis totam beatae est eos eius natus labore dolorum odit ipsum. Voluptate, recusandae animi quam sapiente assumenda debitis eum! Provident voluptas, nostrum ratione tempore voluptate modi nulla aut omnis nesciunt mollitia corporis quibusdam debitis quisquam rem. Aperiam est nihil, quod laboriosam quia a ipsum. Ipsum dolorem voluptatum esse architecto facilis nam doloremque autem dolorum sapiente velit! Optio corrupti ut alias cupiditate distinctio quam architecto? Neque, ratione facere dignissimos qui laborum accusantium officia dolorem blanditiis repudiandae aliquid rem, dolorum tempore animi. Vel quod aspernatur unde delectus officiis odit natus quae nam quo sit. Impedit debitis adipisci praesentium esse facilis, ea officia laboriosam fugiat id odit quod!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, nostrum esse ea id quo quis dolore reprehenderit minus? Fugit, suscipit. Ea deserunt sunt alias molestias, maxime doloremque sequi, nemo dolore veritatis hic, dolorum vel itaque? Esse, magnam alias! Tenetur, quam distinctio culpa, excepturi deserunt illo corporis totam beatae est eos eius natus labore dolorum odit ipsum. Voluptate, recusandae animi quam sapiente assumenda debitis eum! Provident voluptas, nostrum ratione tempore voluptate modi nulla aut omnis nesciunt mollitia corporis quibusdam debitis quisquam rem. Aperiam est nihil, quod laboriosam quia a ipsum. Ipsum dolorem voluptatum esse architecto facilis nam doloremque autem dolorum sapiente velit! Optio corrupti ut alias cupiditate distinctio quam architecto? Neque, ratione facere dignissimos qui laborum accusantium officia dolorem blanditiis repudiandae aliquid rem, dolorum tempore animi. Vel quod aspernatur unde delectus officiis odit natus quae nam quo sit. Impedit debitis adipisci praesentium esse facilis, ea officia laboriosam fugiat id odit quod!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, nostrum esse ea id quo quis dolore reprehenderit minus? Fugit, suscipit. Ea deserunt sunt alias molestias, maxime doloremque sequi, nemo dolore veritatis hic, dolorum vel itaque? Esse, magnam alias! Tenetur, quam distinctio culpa, excepturi deserunt illo corporis totam beatae est eos eius natus labore dolorum odit ipsum. Voluptate, recusandae animi quam sapiente assumenda debitis eum! Provident voluptas, nostrum ratione tempore voluptate modi nulla aut omnis nesciunt mollitia corporis quibusdam debitis quisquam rem. Aperiam est nihil, quod laboriosam quia a ipsum. Ipsum dolorem voluptatum esse architecto facilis nam doloremque autem dolorum sapiente velit! Optio corrupti ut alias cupiditate distinctio quam architecto? Neque, ratione facere dignissimos qui laborum accusantium officia dolorem blanditiis repudiandae aliquid rem, dolorum tempore animi. Vel quod aspernatur unde delectus officiis odit natus quae nam quo sit. Impedit debitis adipisci praesentium esse facilis, ea officia laboriosam fugiat id odit quod!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, nostrum esse ea id quo quis dolore reprehenderit minus? Fugit, suscipit. Ea deserunt sunt alias molestias, maxime doloremque sequi, nemo dolore veritatis hic, dolorum vel itaque? Esse, magnam alias! Tenetur, quam distinctio culpa, excepturi deserunt illo corporis totam beatae est eos eius natus labore dolorum odit ipsum. Voluptate, recusandae animi quam sapiente assumenda debitis eum! Provident voluptas, nostrum ratione tempore voluptate modi nulla aut omnis nesciunt mollitia corporis quibusdam debitis quisquam rem. Aperiam est nihil, quod laboriosam quia a ipsum. Ipsum dolorem voluptatum esse architecto facilis nam doloremque autem dolorum sapiente velit! Optio corrupti ut alias cupiditate distinctio quam architecto? Neque, ratione facere dignissimos qui laborum accusantium officia dolorem blanditiis repudiandae aliquid rem, dolorum tempore animi. Vel quod aspernatur unde delectus officiis odit natus quae nam quo sit. Impedit debitis adipisci praesentium esse facilis, ea officia laboriosam fugiat id odit quod!</p>
        </div>
      </Wrapper>
    </AbsoluteWrapper>
  )
}

export default PageTwo
