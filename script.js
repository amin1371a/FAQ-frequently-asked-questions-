let accordionBtns = document.querySelectorAll(".accordion__question");

accordionBtns.forEach(item => {
    item.addEventListener("click", event => {
        let accCollapse = item.nextElementSibling;
        if (!item.classList.contains("colapsing")) {
            //open accordion item
            if (!item.classList.contains("open")) {
                accCollapse.style.display = "block";
                let accHeight = accCollapse.clientHeight;

                setTimeout(() => {
                    accCollapse.style.height = accHeight + "px";
                    accCollapse.style.display = "";
                }, 1)

                accCollapse.classList = "accordion__collaps collapsing";


                setTimeout(() => {
                    accCollapse.classList = "accordion__collaps collapse open";
                }, 300);
            }

            //close accordion item
            else {
                accCollapse.classList = "accordion__collaps collapsing";

                setTimeout(() => {
                    accCollapse.style.height = "0px";
                }, 1);

                setTimeout(() => {
                    accCollapse.classList = "accordion__collaps collapse ";
                    accCollapse.style.height = "";

                }, 300);


            }

            item.classList.toggle("open");
        }

    });
});