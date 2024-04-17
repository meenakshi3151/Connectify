import React from "react";
import { Link } from "react-router-dom";

import { useState, useContext, useEffect } from "react";
import axios from "axios";
import NavbarDash from './NavbarDash'
function ShowPosts() {
	const [data, setData] = useState([]);
	
	const config = {
		headers: {
			"Content-type": "application/json",
		},
	};
	console.log("hi");
	const [email, setEmail] = useState("");
	const getName = (id) => {
		console.log(id);
		axios.get('http://localhost:5000/getName', {
			params:{
				id:id
		   } ,
		 config}).then((res) => {
			console.log(res.data);
			setEmail(res.data);
		});
	};
	useEffect(() => {
		axios.get('http://localhost:5000/showAllPosts',
	config).then((res) => {
		
			setData(res.data.posts);
			res.data.posts.forEach(post => {
				
			});
			// console.log("hi");
		});
	}, []);
	
	return (

		<>
			
			<NavbarDash />
			{data.map((item) => (
				console.log(item.PostedBy),
				getName(item.PostedBy),

				<div class="container mx-auto px-20">
					<div>
						<div class="p-3 px-6 min-h-48 flex justify-center items-center" >
							<custom-card3>
								{/* <div>{item._id}</div>
								<div>{item.PostedBy}</div> */}
								<div class="rounded-md shadow-md sm:w-96 bg-coolGray-900 text-coolGray-100">
									<div class="flex items-center justify-between p-3" >
										<div class="flex items-center space-x-2" >
											<img src="https://stackdiary.com/140x100.png" alt="" class="object-cover object-center w-8 h-8 rounded-full shadow-sm bg-coolGray-500 border-coolGray-700" />
											<div class="-space-y-1" >
												<h2 class="text-sm font-semibold leading-none" >
													{/* <Link

														to={
															item._id !== state._id
																? `/profile/${item._id}`
																: "/profile"
														}
													> */}
														{/* {item.PostedBy.name} */}
													{/* </Link> */}
												</h2>
												<span class="text-base font-semibold" >{email}</span>
											</div>
										</div>
										<button title="Open options" type="button">

										</button>
									</div>
									
									<div class="p-3" >
										<img

											alt=""
											src={`data:${item.PhotoType};base64,${item.Photo}`}
										/>
									</div>
									<div class="flex flex-wrap items-center pt-3 pb-1" >
										<div class="flex items-center space-x-2">
										
										</div>
									</div>
									<div class="space-y-3" >
										<p class="text-sm" >
											<span class="text-base font-semibold">	
												{email}
											</span> {item.Body}
										</p>
										<input type="text" placeholder="Add a comment..." class="w-full py-0.5 bg-transparent border-none rounded text-sm pl-0 text-coolGray-100" />
									</div>
								</div>
						
					</custom-card3>
				</div>

				</div >
</div >
))
};
        </>
    )
}
export default ShowPosts;