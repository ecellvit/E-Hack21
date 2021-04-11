import React, { useEffect } from "react";
import "./Faqs.scss";
import Aos from "aos";
import "aos/dist/aos.css";

function Faqs(){
 useEffect(() => {
   Aos.init({ duration: "700" });
 }, []);

 const handleclick = ()=>{
  const accordion = document.querySelector(".accordion");
  const items = accordion.querySelectorAll(".accordion__item");

  items.forEach((item) => {
    const title = item.querySelector(".accordion__title");

    title.addEventListener("click", (e) => {
      const opened_item = accordion.querySelector(".is-open");

      // Toggle current item
      toggle_item(item);

      // Close earlier opened item if exists
      if (opened_item && opened_item !== item) {
        toggle_item(opened_item);
      }
    });
  });

  const toggle_item = (item) => {
    const body = item.querySelector(".accordion__body");
    const content = item.querySelector(".accordion__content");

    if (item.classList.contains("is-open")) {
      body.removeAttribute("style");
      item.classList.remove("is-open");
    } else {
      body.style.height = body.scrollHeight + "px";
      item.classList.add("is-open");
    }
  };
}

 return (
   <div class="accordion">
     <link
       rel="stylesheet"
       href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.0/css/all.min.css"
     />
     <div class="accordion__item">
       <div class="accordion__title" onClick={handleclick}>Lorem ipsum dolor sit</div>
       <div class="accordion__body">
         <div class="accordion__content">
           <p>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
             consequuntur ab quaerat deleniti vero praesentium iste beatae iusto
             harum sit!
           </p>
           <p>
             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
             laborum cupiditate fugiat ipsam ducimus explicabo temporibus
             possimus? Nobis, aut alias.
           </p>
         </div>
       </div>
     </div>

     <div class="accordion__item">
       <div class="accordion__title">Lorem ipsum dolor sit amet</div>
       <div class="accordion__body">
         <div class="accordion__content">
           <p>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
             consequuntur ab quaerat deleniti vero praesentium iste beatae iusto
             harum sit!
           </p>
         </div>
       </div>
     </div>

     <div class="accordion__item">
       <div class="accordion__title">Lorem, ipsum dolor</div>
       <div class="accordion__body">
         <div class="accordion__content">
           <p>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
             voluptate quod. Quidem ea voluptas omnis quaerat illo, dolorem
             optio libero veritatis corporis! Dolore, distinctio labore.
             Reprehenderit eveniet exercitationem laboriosam inventore!
           </p>
           <p>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic neque
             commodi voluptatum earum veniam, molestias assumenda asperiores
             accusantium reprehenderit libero similique deleniti nihil harum sed
             vel incidunt debitis. Reprehenderit est modi veniam dignissimos
             dolores provident laboriosam blanditiis eligendi animi maiores.
           </p>
         </div>
       </div>
     </div>

     <div class="accordion__item">
       <div class="accordion__title">
         Lorem ipsum, dolor sit amet consectetur adipisicing elit
       </div>
       <div class="accordion__body">
         <div class="accordion__content">
           <p>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
             doloribus nesciunt eius, ad sit qui vel omnis aut nostrum molestiae
             libero iure eveniet perspiciatis nisi in eaque doloremque fuga
             alias fugit possimus incidunt odio accusantium at! Nam aperiam
             voluptate, autem ipsam ducimus impedit quas beatae, tempore
             exercitationem omnis reprehenderit eius!
           </p>
         </div>
       </div>
     </div>

     <div class="accordion__item">
       <div class="accordion__title">Lorem ipsum dolor sit amet</div>
       <div class="accordion__body">
         <div class="accordion__content">
           <p>
             Lorem ipsum dolor sit amet consectetur, adipisicing elit.
             Laboriosam maxime ratione ipsum autem quidem incidunt quam
             voluptatibus excepturi totam consequuntur.
           </p>
         </div>
       </div>
     </div>
   </div>
 );
}

export default Faqs;