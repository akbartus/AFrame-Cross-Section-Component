AFRAME.registerComponent('cross-section', {
    schema: {
        distance: { type: 'number', default: 2.5 },
        animationTime: { type: 'int', default: 3000 }
    }
    ,
    init: function () {
        var dist = this.data.distance;
        var aTime = this.data.animationTime;
        var scene = document.querySelector("a-scene");
        var mainCam = document.createElement("a-entity");
        mainCam.setAttribute("position", "0 1.6 0");
        mainCam.setAttribute("camera", "near: 0.05; far: 100");
        mainCam.setAttribute("wasd-controls");
        mainCam.setAttribute("look-controls");
        scene.appendChild(mainCam);
        var camera2 = document.createElement("a-camera");
        camera2.setAttribute("id", "camera2")
        scene.appendChild(camera2);
        var el = this.el
        var clicked = false;
        el.addEventListener('click', function () {
            if (clicked === false) {
                document.getElementById("camera2").setAttribute("animation", "property: camera.near; dur:" + aTime + "; to: " + dist);
                clicked = true;
            } else {
                camera2.setAttribute("animation", "property: camera.near; dur:" + aTime + "; to: 0.05");
                clicked = false;
            }
        });
    }
});