import React from "react";
import './index.css';

const PostItem = ({
                      post1 = {
                          "user": "Elon Musk", 
                          "handle": "@elonmusk", 
                          "time": "23h", 
                          "textbflink": "Amazing show about", 
                          "link":"@Inspiration4x","textafterlink":"mission!", 
                          "cardtitle": "Countdown: Inspirational Mission to Space | Netflix official site", 
                          "cardtext": "From training to launch to landing, this all-access docuderies rides along with the Inspiration4 crew on the first all-civilian orbital space...",
                          "comment":"4.2K", 
                          "retweet":"3.5K", 
                          "heart":"37.5K", 
                          "profilepic": "data:image/jpeg;base64,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", 
                          "cardpic": "data:data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPEBAPEBAPEBAQDxUQEA8QDxAPDw8QFRUWFhUVFRUYHSggGBolGxUVITEiJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFxAQFS0dFx0tLS8tLS0rKy0tLSstLS8rLS0tKystLS4tLS0tKystLS0tLS0tLS0tLS0tLTctLS0rLf/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAQYCBAUDBwj/xABEEAABAwIDBQUECAMFCQEAAAABAAIDBBEFEiEGEzFBUSJhcYGRB1KhsRQyQmJygsHRIzPwQ1OisuE0VGNzg5KzwsMk/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAfEQEBAAICAwEBAQAAAAAAAAAAAQIRITEDEkEiwVH/2gAMAwEAAhEDEQA/APiSIiolERBBCwK9CsCoMVClEELIKFkwINmmjurZs9QZiNFW6IahXvZx1rIj6JsvggIGiubMAYQAdBz62Vc2cxANAV+ZwF+NtUWMIIWRNDGANaOAC5WL1ttAtrEqoMFybDgOpPQDiT3BVHG6mUAuO7gZ/eVTxGfKMdo+dkRqYhU3uq5icy5+K49TtJzVc0x92CMRM9Xa/FVus2ihPCne/vlmc74K6NupNOtaSqXAnxpp4UkHpf8ARapxdnOmYPwkt+SmqLCZl6xTKtsxaDmyePvZJm+DltwVTHfyqmNx9ycGFx/OOyfRTSrRBGH6HmqLtRhZhmksDbNc+DgDceqt2FYgGPa2cGEuNmucQYnH7sgJafVWzafZltVR75thLG29+T2i/ZPqbHvVR8IIULYq4cjy308F4IrFFKhBClEQFKIgkIiKiVBClEGCKSoUHoiIglSoUqgVg5ZrBygxKhSsUEhejF5hejEHQojqFasKqctlUIHWXYpp7JGa+sbETGaoYPsxjeO6acPiQvoU+PNia4OIDhqXO+pGDwvbUk8mjU+Gq+Y7D1zaWhmq3WzSybuO/CzBxPcLuJ8FxKzG31EmW77ZuA1kc53/ALu0ueXAcLJo2u+KbVPeXbglnJ07iBJb8XBg+631VAxqsa4nM50jjrmJIF/E6nzVkqMJbSw76sIuBdlK09hn4jzK+a4piJle59gMxNmjQAdF2xwYtrzqKu/Cw8FpvcSousXFbmKsbrEhXH2ZUEdRVSxyMbIH0k7ACAQHGMkEd9wqrWwGN7mHTKbeizbzprXG2q5q8SO5bFlgQs2BT1L4rhjiGn6zDZzHDo5p0KtuzO20tOx0Gr4XtsacnNk04wOOo/5Z8lTnNXmdFixXUxpgfeRpuA4kEc2ErjLpU02YFp+18zz/AH7/ABXOItp00WVQiIghFKICIiApRFQREQQVisysFBmpUKUBSoUqgoKlQVBgVCyKhACzasAsgg2GFbbJbC/RaLStqhd/EiHG8jBY8D2gqi9bQT/R4oKMH/Z4W7y3A1Enbf8AH/Iur7MMP3lTv3C7adhk19/g34m/kqRi9UZJC5xu58jnuPXW3za71X1H2ex7rDZ5uckmQH7rG/u4rU62ze1V9pOMukl3dza9yqOD1XQx+p3k8jvvWHkueF2jKbKCF62uveClLilrUi6ex5uWujNvrXb6iy523mE5aiRzB9s37jzVs9mtG2OeM6ZswW3t1R//AKH2FwXnNa1l5b5P3t6Zh+dPjRgd0WDobK1YlSBp4W8FyZKYFdfbbncNOQY1rytXZkplqT01gptNOdA6x+P9f10WNSLOJ69r1/orNzbEKKofV8CPQrN7R4IiKAiFEBAiBBKIioIiICwWaghBKIiglFClBKhCoQFClEELIKFKDIFb+CQGWpp4xxfOxo8S4LnhdvYp1sSob/71H80HQ2lwGahlaJS05mteLE8JMzwD38fRfT8IOTA4LfaEj/8AG4foq/7YGXdDJyMMJ82vqoz82eoXRwSr3mBwjmzes/xu/ddMWXy2VuZxPUkrJsB6LZksxuZwvc2HJdKhibIwPa2wPXiCNF3km9fWXNipz5eS6+HstbQfBa+IyCEAlt7m1r2XRomghpA0IBHmsZT43j/q57Em07D94LqbeOyTyG18xuudsnB/EYQOYXe2/pwXE9QF48p+nrl6fKa9xcT4rQfEtqpxGH6Qaa7s/C9uzmte1+tl7Ppl68MZY82Vu3JcLc1o1MoXVqmgcifJcer8FcsNM+zmTm5TEad0ZaHcdf0P6o8G/kfkVvbUH+J+d49C0fouOXauKiIsgilQgKVClAREQERFQREQERFAUoiCEQogIoRBKlYqUEro7OS5KykeeDKqFx8BI0lc26kOI1GhGoI4ghB9m9qUBdTxu90yxW63bHMz/wAM/qVxtiKnNQzQ3+pKSB3Oa0/MFWfaR4qaDetsQ+nZVN0vrGN44DxhfUBUDY2bdTSwk6OFv+06fAreFTSuV+IvcTHYBjHnQcSRpqVaNkaxsw3FrOY3M0jXML6+eqp2Ix5ZpWnS0jhbpqV0Nk6ndVULuW8aD+Fxyu+BK1h5LMtnruadPbOZ0cghFsoa1501JN+fkvTZnF949kDhqey13gDYH0stP2hPtiEzPdbG3/AD+q42HF4kY6MOMgc0xtaC5zng3AAHEpnlferh1H3jZkFr2+KsO27MxH4AvDCKE9lxblNgSOncurtVSbxtiNDHY+BGq45z9PVPj85Or4Dim8a3sOflzE3Gdwy5wOQv48z4XSalLWudb6rS4+QuvnOzFIJ66mj5OmaTf3WnMfgFd/aXictKIYoSWGUPc94A1aLDKD53014Lv4s/WWvNeXGwDE31ZlDmsblAc3KDwJtY34rHFYrXVZwWokjnjMZs5z2sI5OBcOye46K37QaXW8c/bHntJFapW3laPvtv4ZgT8AVhjcmYsJ4kOcfMhelG27nO6AgeLuwPgXnyWriz7yW91oH6/qvPexpoilQEREBERAREQEREBERUERFBKhSoQEREBQpUICIVCApBUIg+zez/ABPe4Yy43j6N5a5nN8bSTk/NG5zfNU8UrKWv3ZeS2N+Vrwf5kJAdE/8ANE5jvNPZZi+5qnQONmzt0udM7eHwv6Lf2/w3I7MP7MBoPWmc68Z/I9zoz3Pj6KUjU9oWzrYHNq435o53ZXNI1bJlve/CxA9bqtYJhs1TURU8FjNM/dx3dlAceZPICxPkrNW4rvsO3T3Fzoywg8TcOA+RWxs6wRYrhEzQAJIIXki1t4yBzH+fZB80x65buPPDZ9r2yUlNMK5zm5amRsbWAEuuyIXcTwF8vALz9iNKH4m9pAJ+hyObcXyuD4hcd9ifVXD201P0jDo33uYapj+XBzXM+bguP7LYmU2NxZRlZVYS2WIdS+OJz+P3o5Vr252mtPtVPQBqjaCI7mRzRdzYXlv4g02WtjePGkkp490JBUFwad7kIc3Le4ynTtDmssXr69kb3so6d4a0uJdWuaQ0C5Ntzr4XWL5JvX1uY5cX+vzb7MKAyYvSMBGm8eb9Gxv4deS73tghBlkcf5dNu6WOzb5qqQCaTXkGxBnm8d619g2V9PNVOw6kpqmUMYXvmAaYAc9t2czbA3IIHuhNqYsbqKUU9XSQhraiSrdUbyPel5zl1yJMoaA61raBreisz4MsLONKNgsgE0YI+tLHZ17ZbPaVftt8P3QJuPDivn+GUm8ey5c2PeMY+Rovuy8nKfHQ+i72OSukkEbqieUN4vkcLho1JsB0vxvyW5lrhMZfW14UEVmi/O8h7mi7Gf8A0PgQuDUSZnud1cfTkrDXu3VOTbK6Xg33W2s1vk2wVassuaQpWIWSAiIgIiICIiAiIgIiICIiCVClEEIiIChSiCCoUoghFKKj1pZ3RPZI3RzHBw8QvsczhiNE2VgD5GsJDCbb1rm2fET95txfk4A8l8XV29nmO7hxhceyTcDuPG3mpRwcQDobsDi6KUZonkWLmX59HAizhyIPcvQ48QaNwaM1KRwI7bdLg6cwLeate3GDtZmlAvTTPzktFzTVDv7Rv3XaXHPxsvntXSviIDhodWuGrHjq08wiy2LpjG2MNTTT07oXtL2jI4ZbB4Ic25B7ui0ML2oEMuF1ADjJRNdE8BxBfESQADy7L3BVTMl1PWNXO3t9dr/aCaieB7mkMjlc9jXjVjSGDKTfX6oPmvo+L+0OifRy7qQOkdA4ZdRlJbb9V+Xt+b3JK2Yqw8BcLlcLzZe3WeTG63OlwwLaYUNXJM2XQhgLe3ll0PEDjlJ4GwWrU7V5my5sz3SZnZQA2PeP1doD9Xu146qsVTLWdoQ7py7lqlxWscIzl5cpW4J8sZiGmYtc7j2i29r+unTXquvgtE6V/bvoA6W/IcWs8SbE+A71y6WlcHNuM0riMkfME/ad+3r322WnNLSuDAXO0MsnQvNrnzIHmtuW6rO0tZvJco+qzQeP9fNchZy3zOvxzG/qsVUQpCKUBERAREQEREBERAREQERFRKIpUEKFKIIREQFNkC2aKhlncI4o3yvPBkbC93oFRrWQNVxwX2dV9QTnY2mY1xa587he44gMbck+nirZh3s9oIZoop5JKh+R0ryDuoiGkAMDRrqTrc8lNj5ZQYfLUPEcEUk0h+xEx0jvQBX7Bti6zCsmJ1jIY2xPYW0z3h00jg9ruDbtb9XmfJfVKSugpWbunijhYPsxsaweduKqftKxN09Jx/lyBx8Dp+ymx5YpikBdplkpapt2Ejs2dxY4ciOBHIhUvFsGdThxiaKmkcbmJ13Oj9NR+Ia9Vw6TEy1roHm8TnFzf+G/qO4810aLHZIuw4kgaA8x+6Djy0FPJrFLuif7OfgPCRo+YHitR+EzjURl46xFsw9WE2VnqHUtRqWtDjxc3su81qOwaInsyEeLQf2VFdNFKOMcg8Y3fsvRmGznhDMf+m+3rZWNmFSDhUkD84+TlJwPN9eozflJ+ZRXD+guGkj44x0Lw93k1l/jZelNDdwbTsc+T+8cBcd4HBvibnvXdiwelZq5zn26kNHwXu/FoIW5Ymt8GCw8yoMsOw5tI0ySHPM7S/HU/Zb+pWtjuLkN+itP2hJUOHAv+wzwbf1PcubV4u8nOTd9rMHJg6rjF5vqePE9URZo9mI6mFs0UrmSOvnY8BzC4cbEagHzXDr8DqIPrxkt99nbb8OHmrLg85ZE1t+/1XYhrFR8yCL6G6GmkkkZJDG5pa118uVwJuDYjXktCv2UpyC+GZ8eoAY8CQam1gdD63U2KWi7eLbNTQXcLSx++wG48W8viuIVRKJdEEIpUICIiAiIgIoRBkixul1UZqFF1N1FF0MHwSprHZYInP6v+rG38TzoFu7G7n6T/GjbIAwlgdq0PBGpHA6X4q+zY9YZW2aBwDbNA8gpsaWDezunjs6tn3jv7mAlrPB0h1PkArhTV9NRs3dNFHCzoxoBd4niT4qj1GNu6rnTYu7qguAx076ZmY2eRM3XqMrh6tB81q1mL2qIXE8WvjPnZw/yqlTYk4PY8HW5b5H/AFAWNbXktBvctIcPEILzPjPeuTiOJCRjmE6OaWnzVXkxO+t14Orrpoc+YWJB5Gylk/I6jrzCmrdc5vVa11RuAg8Csw9w4OPqtAlQHnqfVB0vpD/fd6lQal/vO9SufvT1KF56lBuul6k+ZXk+o6LVupugzuTxUxNu4Dv+CxBXrAbaoO7BUWW/DUquNnXq2str0Qd2nnvJIe8NHkP9Vm+p7bW+72z8h+q4lLU2bqdTqfEqI6o5nm+t7eQCgtcVetGvw2mn1Lcj/fZp6jgVyG1nevVtYeqDQrsAlj1ZaVvVos4eLf2XLc0g2III5EWPorUys71y9oqnPkGlxck8+4fNUci6LG6XQZqFjdTdUSii6XQYooRQSihSgm6m6xRBuUUxjIeOIPw/q67Lqwnmq8DotiObS3RB0Japaz6haznryc5B7PmuR3arF0y1yVF0HpvFG8XmiD1zrC6xU3QTdFiiDJFiiDJFCIJC9M68rpdB6Z0L15Ig2BKgl18V4JdBuCZerZloByyDkHSbMtGqkzEn08lG80XldBiiKEBSoRBKKEQEREBERAREQTdLoiBc9UuoRAREQEREBERAREQEREBERAREQEREBERAUqEQTdQiICIiAiIgIiIP/9k="
                      }
}
) => {
    return(
        <>
                    <div className = "row">
                    <div className = "col-2">
                    
                    <div><img className="wd-profilepic" src={post1.profilepic}/></div>
                    </div>
                        <div className = "col-10">
                            <div className="wd-txt-book">
                                <span className="fw-bold"> {post1.user} </span><i className="fas fa-check-circle"></i> <span className="wd-txt-clr text-muted">{post1.handle} &#183; {post1.time} <span className=" wd-circle wd-circle-align"></span></span>
                            </div>
                            
                            <div className="wd-txt-book">
                                {post1.textbflink} <a href="#">{post1.link}</a> {post1.textafterlink}
                            </div>
                            </div>
                            </div>
                            <div className = "row">
                            <div className="col-1">
                          
                             </div>
                             
                             <div className ="col-11 border border-secondary">
                             
  <img className="wd-card-img-top" src={post1.cardpic} alt="Card image cap"/>
  <div className="wd-card-body">
    <h6 className="wd-card-title fw-bold">{post1.cardtitle}</h6>
    </div>
    <p className="wd-card-text">{post1.cardtext}</p>
    <div className="row">
    <div className="col-3">
     <i className="far fa-comment"></i> {post1.comment}
</div> 
<div className="col-3">
     <i className="fas fa-retweet"></i> {post1.retweet}
</div> 
<div className="col-3">
     <i className="fas fa-heart"></i> {post1.heart}
</div> 
<div className="col-3">
     <i className="fas fa-share"></i>
</div> 

</div> 
</div>
</div>
<br/>
</>
        );
}
export default PostItem;