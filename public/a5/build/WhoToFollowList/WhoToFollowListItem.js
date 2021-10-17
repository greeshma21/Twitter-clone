
const WhoToFollowListItem = (who) => {
    return(`
                <li class="list-group-item">
                    <div class="row me-1">
                        <div class="col-3">
                            <img src=${who.avatarIcon} width="50px" height="50px" class="rounded-circle">
                        </div>
                        <div class="col-6">
                            <span class="fw-bold">${who.userName}<i class="fas fa-check-circle ms-2"></i></span>
                            <p><small>${who.handle}</small></p>
                        </div>
                        <div class="col-3">
                            <button class="btn btn-primary rounded-pill me-2">Follow</button>
                        </div>  
                    </div>
                </li>
                
        `);
}
export default WhoToFollowListItem;
