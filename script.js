// Mobile swipe up and down support
var supportTouch = $.support.touch,
  scrollEvent = "touchmove scroll",
  touchStartEvent = supportTouch ? "touchstart" : "mousedown",
  touchStopEvent = supportTouch ? "touchend" : "mouseup",
  touchMoveEvent = supportTouch ? "touchmove" : "mousemove";
$.event.special.swipeupdown = {
  setup: function () {
    var thisObject = this;
    var $this = $(thisObject);
    $this.bind(touchStartEvent, function (event) {
      var data = event.originalEvent.touches ?
        event.originalEvent.touches[0] :
        event,
        start = {
          time: (new Date).getTime(),
          coords: [data.pageX, data.pageY],
          origin: $(event.target)
        },
        stop;

      function moveHandler(event) {
        if (!start) {
          return;
        }
        var data = event.originalEvent.touches ?
          event.originalEvent.touches[0] :
          event;
        stop = {
          time: (new Date).getTime(),
          coords: [data.pageX, data.pageY]
        };

        // prevent scrolling
        if (Math.abs(start.coords[1] - stop.coords[1]) > 10) {
          event.preventDefault();
        }
      }
      $this
        .bind(touchMoveEvent, moveHandler)
        .one(touchStopEvent, function (event) {
          $this.unbind(touchMoveEvent, moveHandler);
          if (start && stop) {
            if (stop.time - start.time < 1000 &&
              Math.abs(start.coords[1] - stop.coords[1]) > 30 &&
              Math.abs(start.coords[0] - stop.coords[0]) < 75) {
              start.origin
                .trigger("swipeupdown")
                .trigger(start.coords[1] > stop.coords[1] ? "swipeup" : "swipedown");
            }
          }
          start = stop = undefined;
        });
    });
  }
};
$.each({
  swipedown: "swipeupdown",
  swipeup: "swipeupdown"
}, function (event, sourceEvent) {
  $.event.special[event] = {
    setup: function () {
      $(this).bind(sourceEvent, $.noop);
    }
  };
});

// Slideshow
var slideshowDuration = 4000;
var slideshow = $('.main-content .slideshow');
const test = document.getElementById('mousemove-2').style.display
console

function slideshowSwitch(slideshow, index, auto) {
  if (slideshow.data('wait')) return;

  var slides = slideshow.find('.slide');
  var pages = slideshow.find('.pagination');
  var activeSlide = slides.filter('.is-active');
  var activeSlideImage = activeSlide.find('.image-container');
  var newSlide = slides.eq(index);
  var newSlideImage = newSlide.find('.slidess');
  var newSlideImageName = newSlideImage[0].children[0].children[0].alt
  setTimeout(function () {
    document.getElementById('mousemove').style.display = 'block';
    document.getElementById('mousemove-2').style.display = 'none';
    document.getElementById('mousemove').innerText = newSlideImageName;
  }, 800)
  var newSlideContent = newSlide.find('.slide-content');
  var newSlideElements = newSlide.find('.caption > *');
  if (newSlide.is(activeSlide)) return;

  newSlide.addClass('is-new');
  var timeout = slideshow.data('timeout');
  clearTimeout(timeout);
  slideshow.data('wait', true);
  var transition = slideshow.attr('data-transition');
  if (transition == 'fade') {
    newSlide.css({
      display: 'block',
      zIndex: 2
    });
    newSlideImage.css({
      opacity: 0
    });

    TweenMax.to(newSlideImage, 1, {
      alpha: 1,
      onComplete: function () {
        newSlide.addClass('is-active').removeClass('is-new');
        activeSlide.removeClass('is-active');
        newSlide.css({ display: '', zIndex: '' });
        newSlideImage.css({ opacity: '' });
        slideshow.find('.pagination').trigger('check');
        slideshow.data('wait', false);
        if (auto) {
          timeout = setTimeout(function () {
            slideshowNext(slideshow, false, true);
          }, slideshowDuration);
          slideshow.data('timeout', timeout);
        }
      }
    });
  } else {
    if (newSlide.index() > activeSlide.index()) {
      var newSlideRight = 0;
      var newSlideLeft = 'auto';
      var newSlideImageRight = -slideshow.width() / 8;
      var newSlideImageLeft = 'auto';
      var newSlideImageToRight = 0;
      var newSlideImageToLeft = 'auto';
      var newSlideContentLeft = 'auto';
      var newSlideContentRight = 0;
      var activeSlideImageLeft = -slideshow.width() / 4;
    } else {
      var newSlideRight = '';
      var newSlideLeft = 0;
      var newSlideImageRight = 'auto';
      var newSlideImageLeft = -slideshow.width() / 8;
      var newSlideImageToRight = '';
      var newSlideImageToLeft = 0;
      var newSlideContentLeft = 0;
      var newSlideContentRight = 'auto';
      var activeSlideImageLeft = slideshow.width() / 4;
    }

    newSlide.css({
      display: 'block',
      width: 0,
      right: newSlideRight,
      left: newSlideLeft
      , zIndex: 2
    });

    newSlideImage.css({
      width: slideshow.width(),
      right: newSlideImageRight,
      left: newSlideImageLeft
    });

    newSlideContent.css({
      width: slideshow.width(),
      left: newSlideContentLeft,
      right: newSlideContentRight
    });

    activeSlideImage.css({
      left: 0
    });

    TweenMax.set(newSlideElements, { y: 20, force3D: true });
    TweenMax.to(activeSlideImage, 1, {
      left: activeSlideImageLeft,
      ease: Power3.easeInOut
    });

    TweenMax.to(newSlide, 1, {
      width: slideshow.width(),
      ease: Power3.easeInOut
    });

    TweenMax.to(newSlideImage, 1, {
      right: newSlideImageToRight,
      left: newSlideImageToLeft,
      ease: Power3.easeInOut
    });

    TweenMax.staggerFromTo(newSlideElements, 0.8, { alpha: 0, y: 60 }, { alpha: 1, y: 0, ease: Power3.easeOut, force3D: true, delay: 0.6 }, 0.1, function () {
      newSlide.addClass('is-active').removeClass('is-new');
      activeSlide.removeClass('is-active');
      newSlide.css({
        display: '',
        width: '',
        left: '',
        zIndex: ''
      });

      newSlideImage.css({
        width: '',
        right: '',
        left: ''
      });

      newSlideContent.css({
        width: '',
        left: ''
      });

      newSlideElements.css({
        opacity: '',
        transform: ''
      });

      activeSlideImage.css({
        left: ''
      });

      slideshow.find('.pagination').trigger('check');
      slideshow.data('wait', false);
      if (auto) {
        timeout = setTimeout(function () {
          slideshowNext(slideshow, false, true);
        }, slideshowDuration);
        slideshow.data('timeout', timeout);
      }
    });
  }
}

function slideshowNext(slideshow, previous, auto) {
  var slides = slideshow.find('.slide');
  var activeSlide = slides.filter('.is-active');
  var newSlide = null;
  if (previous) {
    newSlide = activeSlide.prev('.slide');
    if (newSlide.length === 0) {
      newSlide = slides.last();
    }
  } else {
    newSlide = activeSlide.next('.slide');
    if (newSlide.length == 0)
      newSlide = slides.filter('.slide').first();
  }
  slideshowSwitch(slideshow, newSlide.index(), auto);
}

function homeSlideshowParallax() {
  var scrollTop = $(window).scrollTop();
  if (scrollTop > windowHeight) return;
  var inner = slideshow.find('.slideshow-inner');
  var newHeight = windowHeight - (scrollTop / 2);
  var newTop = scrollTop * 0.8;

  inner.css({
    transform: 'translateY(' + newTop + 'px)', height: newHeight
  });
}

$(document).ready(function () {
  $('.slide').addClass('is-loaded');

  $('.slideshow .arrows .arrow').on('click', function () {
    slideshowNext($(this).closest('.slideshow'), $(this).hasClass('prev'));
  });
  $('.nextt').on('click', function () {
    let lastImageInView = document.getElementById('mousemove-2').style.display == 'block'
    if (lastImageInView && window.innerWidth >= 1024) {
      $('.slide').on('mousewheel DOMMouseScroll touchmove', function (event) {
        var delta = event.originalEvent.wheelDelta || -event.originalEvent.detail;
        slideshowNext($(this).closest('.slideshow'), delta > 0);
      });
    }
    if (lastImageInView && window.innerWidth <= 1024) {
      $('.slide').on('swipedown swiperight', function () {
        slideshowNext($(this).closest('.slideshow'), true);
      });
      $('.slide').on('swipeup swipeleft', function () {
        slideshowNext($(this).closest('.slideshow'), false);
      });
    }
  });
  

  $('.slideshow .pagination .item').on('click', function () {
    slideshowSwitch($(this).closest('.slideshow'), $(this).index());
  });

  $('.slideshow .pagination').on('check', function () {
    var slideshow = $(this).closest('.slideshow');
    var pages = $(this).find('.item');
    var index = slideshow.find('.slides .is-active').index();
    pages.removeClass('is-active');
    pages.eq(index).addClass('is-active');
  });

});

if ($('.main-content .slideshow').length > 1) {
  $(window).on('scroll', homeSlideshowParallax);
}