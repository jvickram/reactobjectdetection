export const drawRect = (detection, ctx) => {
    detection.forEach(prediction=>{
        // Get prediction
        const [x,y,width,height] = prediction['bbox']
        const text = prediction['class']

        // setting styling
        const color = 'white'
        ctx.strokeStyle = color
        ctx.font = '18px Arial'
        ctx.fillStyle = color 

        // setting rectangles and text
        ctx.beginPath()
        ctx.fillText(text,x,y)
        ctx.rect(x,y,width,height)
        ctx.stroke()
    })
}