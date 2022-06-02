# A-Frame Cross-Section Component
<img alt="Screenshot" src="img/screenshot.jpg" width="800">

### **Description / Rationale**
This is a small A-Frame component, which allows to create cross-sections/dissections and show what is inside of a 3D model/object. It can be used in showing the inner of an architectural model or in anotomy classes. 

### **Instructions**
To enable cross-section component: 
1. Attach it to the head of your html file, for example: 
```
<script src="cross-section-component.js"></script>
```
2. Attach attribute of "cross-section" to the model you want to do the cross-section. Also, attach a class, for making it clickable, for example: 
```
<a-entity class="clickable" cross-section gltf-model="#room" rotation="0 180 0" position="0 -1.5 -3" scale="0.02 0.02 0.02">
``` 

If necessary define the parameters of the attribute, for example:
``` 
cross-section="distance: 3; animationTime: 4000" 
```
3. Make sure to make primitive, where drawing will take place, is <b>clickable if used with VR</b> or <b>withouth if it is mobile or desktop</b>. In other words apply a class name and use cursor and raycaster:

VR: 
```
<a-plane texture-painter class="clickable" position="0 1.5 -4" rotation="0 0 0" width="5" height="4"></a-plane>
<a-entity class="controller" laser-controls="hand: left" raycaster="objects: .clickable;" line="color: #000000"></a-entity>
<a-entity class="controller" laser-controls="hand: right" raycaster="objects: .clickable;" line="color: #000000"></a-entity>
```
Mobile/Desktop: 
```
<a-plane texture-painter position="0 1.5 -4" rotation="0 0 0" width="5" height="4"></a-plane>
<a-entity cursor="rayOrigin: mouse" raycaster="objects: .clickable;"></a-entity>
```
Text recoginition and image generation based on text are enabled through API endpoints. See how everything works in the provided example. 

### **Tech Stack**
The project is powered by AFrame and HuggingFace hosted API endpoints.

### **Demo**
To see the application at work: [Demo application](https://webvr-drawing.glitch.me/)
