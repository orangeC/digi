import React,{Component} from "react";

class ContentSeven extends Component{
	render(){
		let styles={
			root:{
				paddingTop:"50px",
    			borderTop:"1px solid rgba(0, 0, 0, 0.0980392)",
    			width:"100%",
    			maxWidth:"1024px",
    			margin:"0 auto"
			},
			center:{
				width: "100%",
				padding:"30px",
				borderTop:"7px solid rgb(246, 0, 29)",
				backgroundColor:"rgb(244, 244, 244)",
				boxShadow:"rgba(0, 0, 0, 0.2) 0px 0px 10px 1px",
				marginTop:"30px"
			},
			span:{
				fontWeight:"400"
			},
			p:{
				fontWeight: "600",
    			fontSize: "1.1em",
    			padding:"0 10px 10px"
			},
			a:{
				textAlign:"center",
				padding:"50px 0"
			},
			mid:{
				padding:"10px",
				boxShadow:"rgba(0, 0, 0, 0.2) 0px 0px 10px 1px",
				textAlign:"center"
			},
			th:{
    			fontSize: "1em",
    			color: "rgb(246, 0, 29)",
    			textAlign:"center",
    			borderBottom: "2px solid #ddd",
    			lineHeight:"2.5"
			},
			color:{
				color: "rgb(246, 0, 29)"
			}
		}
		return (
				<div style={styles.root} className="ContentSeven">
					
					<p style={styles.p} >就业保障：<span style={styles.span} >就业顾问1对1就业指导，就业推荐，提供企业专属岗位业界最权威职业素养软实力训练，全面提高职业素养、面试技巧、沟通能力等。</span></p>
						<div style={styles.center} >
							<div style={styles.mid} >
							<div className="table-responsive">
								<table className="table">
									<thead>
										<tr>
											<th style={styles.th} >公司名称</th>
											<th style={styles.th} >职 位</th>
											<th style={styles.th} >薪 资</th>
											<th style={styles.th} >工作经验</th>
											<th style={styles.th} >其他</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>用友B2C研发部招聘</td>
											<td>UI设计师</td>
											<td style={styles.color} >10k-20k</td>
											<td>经验3-5年</td>
											<td>更多></td>
										</tr>
										<tr>
											<td>用友B2C研发部招聘</td>
											<td>UI设计师</td>
											<td style={styles.color} >10k-20k</td>
											<td>经验3-5年</td>
											<td>更多></td>
										</tr>
									</tbody>
								</table>
							</div>
							</div>
						</div>
					<div style={styles.a}>
						<a href="#" className="search-more"  >了解更多招聘信息</a>
					</div>
				</div>
			)
	}
}

export default ContentSeven