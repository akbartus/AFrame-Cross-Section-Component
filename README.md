# A-Frame Cross-Section Component
<img alt="Screenshot" src="img/screenshot.jpg" width="600">

### **Description / Rationale**
This is an exploratory project, which demonstrates the drawing and text recognition possibilities in web VR environment. Drawing part represents the reduced and slightly adapted version of Marlon Lückert's <a href="https://github.com/marlon360/whiteboard-vr">"Whiteboard VR"</a>. Text recognition part is made available through Microsoft’s <a href="https://huggingface.co/spaces/nielsr/TrOCR-handwritten">TrOCR model</a>, hosted on HuggingFace. Recognized text is turned into image through <a href="https://huggingface.co/spaces/smangrul/Text-To-Image">another AI model</a> hosted on HuggingFace. 

### **Instructions**
To enable drawing component: 
1. Attach it to the head of your html file, for example: 
```
<script src="texture-painter-component.js"></script>
```
2. Attach attribute of "texture-painter" to a desired primitive, for example to plane: 
```
<a-plane texture-painter position="0 1.5 -4" rotation="0 0 0" width="5" height="4"></a-plane>
``` 

If necessary define the attribute parameters (color: color; background: color; size: numeric;  eraseAll: boolean), for example:
``` texture-painter="color: green; background: red; size: 15" ```
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
