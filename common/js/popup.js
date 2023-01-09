popOpen (e){
      //초기화
      this.scrollT = 0;
      this.imgSizeData = 0;
      this.imgLoad = 0;

      let $this = document.getElementById(e.currentTarget.id)
      let popup = document.querySelector(".viewPop");
      let dimd = document.querySelector(".dimdBg");
      this.imgSizeData = $this.dataset.imgSize;
      history.pushState(null, document.title, location.href);
      this.historyCnt++;

      if(!$this.classList.contains("ing")){
        popup.style.display = "block";
        dimd.style.display = "block";
        gsap.to(popup, {opacity:1, duration:0.3});
        gsap.to(dimd, {opacity:1, duration:0.3});
        this.scrollT = window.scrollY;
        document.querySelector("html").classList.add("lock");
        if(!popup.classList.contains($this.id)){
          popup.querySelector(".titArea .tit span").innerText = $this.querySelector(".txtArea .tit").innerText;
          popup.className = "viewPop loading " + $this.id;
          if($this.dataset.href == "intra"){
            if(!popup.querySelector(".titArea .link").classList.contains("on")){
              popup.querySelector(".titArea .link").classList.add("on");
            }
          }else{
            if(popup.querySelector(".titArea .link").classList.contains("on")){
              popup.querySelector(".titArea .link").classList.remove("on");
            }
            popup.querySelector(".titArea .link a").setAttribute("href",$this.dataset.href);
          }
          popup.querySelector(".imgArea").innerHTML = "";
          popup.height = "";
          for (var i = 0; i < $this.dataset.imgSize; i++) {
            var appendImg = require('@/assets/images/project_view_' + $this.id + i + '.jpg');
            popup.querySelector(".conArea .imgArea").insertAdjacentHTML('beforeend','<img src=' + appendImg + ' alt="" />');
            popup.querySelectorAll(".conArea .imgArea img")[i].onload = () => {
              this.imgLoad ++;
              if(this.imgLoad == this.imgSizeData -1){
                popup.classList.remove("loading")
              }
            }
          }
          if(parseInt(window.innerHeight * 0.9) % 2 == 1){
            popup.style.height = parseInt(window.innerHeight * 0.9) - 1+"px";
          }else{
            popup.style.height = parseInt(window.innerHeight * 0.9)+"px"
          }
        }
      }else{
        this.toastPop("현재 작업중인 프로젝트입니다")
      }
      let saveData = { 
        'scroll' : this.scrollT,
        'history' : this.historyCnt
      }
      this.$emit('updateData', saveData)
    }