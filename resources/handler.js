const m360Video = document.getElementById("m360-video");
const bicycle = document.getElementById('bicycle');
const bonsai = document.getElementById('bonsai');
const counter = document.getElementById('counter');
const flowers = document.getElementById('flowers');
const garden = document.getElementById('garden');
const kitchen = document.getElementById('kitchen');
const room = document.getElementById('room');
const stump = document.getElementById('stump');
const treehill = document.getElementById('treehill');


bicycle.addEventListener('click',function(e){
  m360Video.src="./vids/bicycle.mp4";
  bicycle.className = "selected-scene";
  bonsai.className = "";
  counter.className = "";
  flowers.className = "";
  garden.className = "";
  kitchen.className = "";
  room.className = "";
  stump.className = "";
  treehill.className = "";
});

bonsai.addEventListener('click',function(e){
  m360Video.src="./vids/bonsai.mp4";
  bicycle.className = "";
  bonsai.className = "selected-scene";
  counter.className = "";
  flowers.className = "";
  garden.className = "";
  kitchen.className = "";
  room.className = "";
  stump.className = "";
  treehill.className = "";
});

counter.addEventListener('click',function(e){
  m360Video.src="./vids/counter.mp4";
  bicycle.className = "";
  bonsai.className = "";
  counter.className = "selected-scene";
  flowers.className = "";
  garden.className = "";
  kitchen.className = "";
  room.className = "";
  stump.className = "";
  treehill.className = "";
});

flowers.addEventListener('click',function(e){
  m360Video.src="./vids/flowers.mp4";
  bicycle.className = "";
  bonsai.className = "";
  counter.className = "";
  flowers.className = "selected-scene";
  garden.className = "";
  kitchen.className = "";
  room.className = "";
  stump.className = "";
  treehill.className = "";
});

garden.addEventListener('click',function(e){
  m360Video.src="./vids/garden.mp4";
  bicycle.className = "";
  bonsai.className = "";
  counter.className = "";
  flowers.className = "";
  garden.className = "selected-scene";
  kitchen.className = "";
  room.className = "";
  stump.className = "";
  treehill.className = "";
});

kitchen.addEventListener('click',function(e){
  m360Video.src="./vids/kitchen.mp4";
  bicycle.className = "";
  bonsai.className = "";
  counter.className = "";
  flowers.className = "";
  garden.className = "";
  kitchen.className = "selected-scene";
  room.className = "";
  stump.className = "";
  treehill.className = "";
});

room.addEventListener('click',function(e){
  m360Video.src="./vids/room.mp4";
  bicycle.className = "";
  bonsai.className = "";
  counter.className = "";
  flowers.className = "";
  garden.className = "";
  kitchen.className = "";
  room.className = "selected-scene";
  stump.className = "";
  treehill.className = "";
});

stump.addEventListener('click',function(e){
  m360Video.src="./vids/stump.mp4";
  bicycle.className = "";
  bonsai.className = "";
  counter.className = "";
  flowers.className = "";
  garden.className = "";
  kitchen.className = "";
  room.className = "";
  stump.className = "selected-scene";
  treehill.className = "";
});

treehill.addEventListener('click',function(e){
  m360Video.src="./vids/treehill.mp4";
  bicycle.className = "";
  bonsai.className = "";
  counter.className = "";
  flowers.className = "";
  garden.className = "";
  kitchen.className = "";
  room.className = "";
  stump.className = "";
  treehill.className = "selected-scene";
});

const dl3dvText = document.getElementById("dl3dv-comparison");
const dl3dvVideo = document.getElementById("dl3dv-video");
const dl3dv_15ff83 = document.getElementById('dl3dv-15ff83');
const dl3dv_032dee = document.getElementById('dl3dv-032dee');


dl3dv_15ff83.addEventListener('click',function(e){
  dl3dvText.innerHTML = "We compare Artifixer3D+ on DL3DV to 3DGUT and two baselines that build upon bidirectional video diffusion models. <a href='https://genfusion.sibowu.com/'>GenFusion</a>'s base model generates 16 frames at a time, requiring a iterative distillation process that leads to blurry results, especially in empty areas. <a href='https://research.nvidia.com/labs/toronto-ai/GEN3C/'>Gen3C</a>'s renderings are sharper but often do not respect the source content. Our method can reconstruct plausible and consistent geometry even when the initial rendering is highly degraded."
  dl3dvVideo.src="./vids/dl3dv-15ff83-3dplus.mp4";
  dl3dv_15ff83.className = "selected-scene";
  dl3dv_032dee.className = "";
});

dl3dv_032dee.addEventListener('click',function(e){
  dl3dvText.innerHTML = "Methods that directly take renderings as input without our opacity mixing strategy struggle to generate content in empty areas due to modal collapse. Here, <a href='https://huggingface.co/nvidia/Fixer'>Fixer</a> fails entirely."
  dl3dvVideo.src="./vids/dl3dv-032dee-3dplus.mp4";
  dl3dv_15ff83.className = "";
  dl3dv_032dee.className = "selected-scene";
});
