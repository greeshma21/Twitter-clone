
const WhoToFollowListItem = (who) => {
    return(`
                    <div class="row">
                        <div class="col-3">
                            <img src=${who.avatarIcon} width="50px" height="50px" class="rounded-circle">
                        </div>
                        <div class="col-6">
                            <span class="fw-bold">${who.userName}<i class="fas fa-check-circle ms-2"></i></span>
                            <p><small>${who.handle}</small></p>
                        </div>
                        <div class="col-3 ms-0">
                            <button class="btn btn-primary rounded-pill">Follow</button>
                        </div>
                    </div>
                
        `);
}
export default WhoToFollowListItem;
