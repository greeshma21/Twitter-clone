
const PostSummaryItem = (post) => {
    return(`
                 <li class="list-group-item">
                    <div class="row ">
                        <div class="col-9">
                            <span><small class="text-muted">${post.topic}</small></span><br>
                            <span class="fw-bold">${post.userName}<i class="fas fa-check-circle ms-2"></i><small class="text-muted fw-light">${post.time}</small></span>
                            <p class="fw-bold">${post.title}</p>
                        </div>
                        <div class="col-3">
                            <img class="rounded" src="${post.image}" height=70% width=100%/>
                        </div>
                    </div> 
                 </li>     
        `);
}
export default PostSummaryItem;