document.addEventListener('DOMContentLoaded', function () {

    let ButtonClicked = 0;
    document.getElementById('ShowNav').addEventListener('click', function() {
        let Div = document.getElementById('NavBar');
        if (ButtonClicked == 0) {
            Div.style.display = 'block';
            ButtonClicked = 1;
        } else {
            ButtonClicked = 0;
            Div.style.display = 'none';
        }
    });

    var numberOfNavBarLiHasChildren = 2;

    for(var i = 1; i < numberOfNavBarLiHasChildren + 1; i++){
        var open = 0;
        var NavBarLiHasChildren = document.getElementById('NavBarLiHasChildren' + i);
        NavBarLiHasChildren.addEventListener('click', function (event) {

            if(open == 0){
                this.style.backgroundColor = 'var(--white)';
                this.style.borderTopRightRadius = '10px';
                this.style.borderTopLeftRadius = '10px';
                
                this.querySelector('.SubMenu').style.display = 'block';

                this.querySelector('a').style.color = 'var(--grey)';
                this.querySelector('a').querySelector('div').querySelector('.Span').style.transform= 'rotate(-180deg)';

                open = 1;
            }else {
                this.style.backgroundColor = 'transparent';
                this.style.border = 'none';
                this.querySelector('.SubMenu').style.display = 'none';
                this.querySelector('a').removeAttribute('style');
                this.querySelector('a').querySelector('div').querySelector('.Span').removeAttribute('style');
                open = 0;
            }
        });
    }

    function closeAllSubMenus() {
        var subMenus = document.querySelectorAll('.SubMenu');
        subMenus.forEach(function (subMenu) {
            subMenu.style.display = 'none';
        });

        var navBarLiHasChildren = document.querySelectorAll('.NavBarLiHasChildren');
        navBarLiHasChildren.forEach(function (element) {
            element.removeAttribute('style');
            element.querySelector('a').removeAttribute('style');
            element.querySelector('a').querySelector('div').querySelector('.Span').removeAttribute('style');
        });
    }

    document.addEventListener('click', function (event) {
        if (!event.target.closest('.NavBar')) {
            closeAllSubMenus();
        }
    })
});
