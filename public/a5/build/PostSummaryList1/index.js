/*import PostSummaryItem from "./PostSummaryItem.js";
import post from "./post1.json";

const PostSummaryList = () => {
    return (`
            <ul class="list-group">
                <li class="list-group-item">
                    ${
                        post.map(post => {
                            return(PostSummaryItem(post));
                        }).join('')
                    }
                </li>      
            </ul>
    `);
}
export default PostSummaryList;*/

import PostItem from "./PostItem.js";
import post1 from "./post1.js"
const PostItemList = () => {
    return (`
            <ul class="list-group">
                <li class="list-group-item">
                    ${
                         post1.map(post1 => {
                            return(PostItem(post1));
                            }).join('')
                        }
                </li>      
            </ul>
    `);
}
export default PostItemList;
