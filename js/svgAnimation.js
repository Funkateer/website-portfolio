$( document ).ready(function() {
  //Boat animation
  TweenMax.fromTo('#boatraw', 2.5, {rotationX:-10, transformOrigin:'bottom 0%'},  {rotation:10, ease: Power1.easeInOut, repeat: -1, yoyo: true});
  TweenMax.fromTo('#boatshadow', 2.5, {rotationX:-10, transformOrigin:'bottom 0%'},  {rotation:10,  ease: Power1.easeInOut, repeat: -1, yoyo: true});
  TweenMax.to('#boatraw', 1,   {y:-500, ease: Power1.easeInOut, repeat: -1, yoyo: true});
  TweenMax.to('#boatshadow', 1,   {y:-500, ease: Power1.easeInOut, repeat: -1, yoyo: true});

  //Tentacle animation
  TweenMax.fromTo('#octopusraw', 2.5, {rotation:-10, transformOrigin:'bottom 0%'},  {rotation:10, ease: Power1.easeInOut, repeat: -1, yoyo: true, delay: -0.7});
  TweenMax.fromTo('#octopusshadow', 2.5, {rotation:-10, transformOrigin:'bottom 0%'},  {rotation:10, ease: Power1.easeInOut, repeat: -1, yoyo: true, delay: -0.7});
  TweenMax.to('#octopusraw', 1,   {y:-500, ease: Power1.easeInOut, repeat: -1, yoyo: true});
  TweenMax.to('#octopusshadow', 1,   {y:-500, ease: Power1.easeInOut, repeat: -1, yoyo: true});

  //wave animation
  TweenMax.fromTo('#wave1', 2, {x:'-2000'},  {x: '500', ease: Power1.easeInOut, repeat: -1, yoyo: true});
  TweenMax.fromTo('#wave2', 3, {x:'-1800'},  {x: '500', ease: Power1.easeInOut, repeat: -1, yoyo: true, delay: -1.7});
  TweenMax.fromTo('#wave3', 4, {x:'-1600'},  {x: '500', ease: Power1.easeInOut, repeat: -1, yoyo: true, delay: -1});

  //Star animation
  var stars = $('#stars').children();
  stars.each(function(index, element){
    TweenMax.to(element, (Math.random() * 1.5) + 1, {scale: 0, transformOrigin:'50% 50%', yoyo: true, repeat: -1, delay: -Math.random() * 2})
  })

});
