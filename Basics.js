//

function angle(){
  let p = {}
  try{
    p.lx = poses[0].pose.leftEye.x,
    p.ly = poses[0].pose.leftEye.y,
    p.rx = poses[0].pose.rightEye.x,
    p.ry = poses[0].pose.rightEye.y
    p['atan']= Math.atan((p.ly-p.ry)/(p.lx-p.rx))*180/Math.PI
    p.pan = round(map(p.atan,-50,50,-100,100, true))
    textSize(30)
    color('black')
    text('pan: ' + p.pan , 30, 450)
    //dnfjbhjd
  }
  catch(err){console.log(err)}
}
