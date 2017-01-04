/**
 * Created by htp on 2016/9/23.
 */
function circletext(option){
    this._init(option);
}
circletext.prototype={
    //初始化
    _init: function (option) {
        this.x=option.x || 0;
        this.y=option.y || 0;
        this.innerRadius=option.innerRadius || 0;
        this.outerRadius=option.outerRadius || 0;
        this.innerstyle=option.innerstyle || "red";
        this.outerstyle=option.outerstyle || "blue";
        this.text=option.text || "";

        this.group = new Konva.Group({
            x:this.x,
            y:this.y,
        });
        //初始化一个圆
        var circle=new Konva.Circle({
            x:0,
            y:0,
            radius:this.innerRadius,
            fill:this.innerstyle,
            opacity: 0.8,
        });
        this.group.add(circle);


        //初始化一个圆环
        var ring=new Konva.Ring({
            x:0,
            y:0,
            innerRadius:this.innerRadius,
            outerRadius:this.outerRadius,
            fill:this.outerstyle,
            opacity: 0.8,
        });
        this.group.add(ring);

        //初始化文字
        var text=new Konva.Text({
            x:-this.outerRadius,
            y:-9,
            width:this.outerRadius*2,
            fontSize:16,
            fontFamily:"微软雅黑",
            fontStyle:"bold",
            text:this.text,
            align:"center",
            fill:"#fff",
        });
        this.group.add(text);


    },
    //把 组添加到层或者其他组中。
    addtogrouporlayer:function (a) {
        a.add(this.group);
    }
};




















