const NavigationSidebar = (active) => {
    return (`
            <!--<div class="list-group">
                <a class="list-group-item" href="/">
                    <i class="fab fa-twitter"></i></a>-->
            <!-- continue the rest of the list -->
            <div class = "myDIV mybtn">
            <div class="list-group">
               <a class="list-group-item" href="#">
                   <div class="row">
                       <div class="col-2">
                           <i class="fab fa-twitter"></i>
                       </div>
                   </div>
               </a>
               <a class="list-group-item ${active === 'home' ? 'active' : ''}" href="../HomeScreen/explore.html">
                   <div class="row">
                       <div class="col-2">
                           <i class="fas fa-home me-2"></i>
                       </div>
                       <div class="col-10">
                           <span class="d-none d-xl-block">Home</span>
                       </div>
                   </div>
               </a>
               <a class="list-group-item ${active === 'explore' ? 'active' : ''}" href="../explorescreen/explore.html">
                   <div class="row">
                       <div class="col-2">
                           <i class="fas fa-hashtag me-2"></i>
                       </div>
                       <div class="col-10">
                           <span class="d-none d-xl-block">Explore</span>
                       </div>
                   </div>
               </a>
               <a class="list-group-item" href="notifications.html">
                   <div class="row">
                       <div class="col-2">
                           <i class="fas fa-bell me-2"></i>
                       </div>
                       <div class="col-10">
                           <span class="d-none d-xl-block ">Notifications</span>
                       </div>
                   </div>
               </a>
               <a class="list-group-item" href="messages.html">
                   <div class="row">
                       <div class="col-2">
                           <i class="fas fa-envelope me-2"></i>
                       </div>
                       <div class="col-10">
                           <span class="d-none d-xl-block">Messages</span>
                       </div>
                   </div>
               </a>
               <a class="list-group-item " href="bookmarks.html">
                   <div class="row">
                       <div class="col-2">
                           <i class="fas fa-bookmark me-2"></i>
                       </div>
                       <div class="col-10">
                           <span class="d-none d-xl-block ">Bookmarks</span>
                       </div>
                   </div>
               </a>
               <a class="list-group-item " href="lists.html">
                   <div class="row">
                       <div class="col-2">
                           <i class="fas fa-list me-2"></i>
                       </div>
                       <div class="col-10">
                           <span class="d-none d-xl-block ">Lists</span>
                       </div>
                   </div>
               </a>
               <a class="list-group-item " href="profile.html">
                   <div class="row">
                       <div class="col-2">
                           <i class="fas fa-user-circle me-2"></i>
                       </div>
                       <div class="col-10">
                           <span class="d-none d-xl-block ">Profile</span>
                       </div>
                   </div>
               </a>
               <a class="list-group-item " href="more.html">
                   <div class="row">
                       <div class="col-2">
                           <i class= "fas fa-ellipsis-h me-2"></i>
                       </div>
                       <div class="col-10">
                           <span class="d-none d-xl-block">More</span>
                       </div>
                   </div>
               </a>
            </div>
            <div class="d-grid mt-2">
                <a href="tweet.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
            </div>
            <script>
               var header = document.getElementById("myDIV");
               var btns = header.getElementsByClassName("mybtn");
               for (var i = 0; i < btns.length; i++) {
                   btns[i].addEventListener("click", function() {
                       var current = document.getElementsByClassName("active");
                   }
                   current[0].className = current[0].className.replace(" active", "");
                   this.className += " active";
  }
</script>
         
    `);
}
export default NavigationSidebar;
