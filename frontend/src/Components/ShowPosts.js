import React from "react";
import { Link } from "react-router-dom";
import AuthenticationContext from "../contexts/Authcontexts";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import NavbarDash from './NavbarDash'
function ShowPosts() {
	const [data, setData] = useState([]);
	const { state, dispatch } = useContext(AuthenticationContext);
	const config = {
		headers: {
			"Content-type": "application/json",
		},
	};
	useEffect(() => {
		axios.get('http://localhost:5000/showAllPosts', config).then((res) => {
			setData(res.data.posts);
		});
	}, []);

	return (

		<>
			{/* {data.map((item) => (
				<div >
				<div>
						<div>
							avatar={
								<div>
									<img
										
										alt=""
										src={`data:${item.PhotoType};base64,${item.Photo}`}
									/>
								</div>
							}
							title={
								<Link
									
									to={
										item.PostedBy._id !== state._id
											? `/profile/${item.PostedBy._id}`
											: "/profile"
									}
								>
									{item.PostedBy.Name}
								</Link>
							}
							
                            </div>
							
						<div>
						
							image={`data:${item.PhotoType};base64,${item.Photo}`}
							title="Paella dish"
                            </div>

					
                            </div>
				</div>
			))} */}
			<NavbarDash />
			{data.map((item) => (
				<div class="container mx-auto px-20">
					<div>
						<div class="p-3 px-6 min-h-48 flex justify-center items-center" >
							<custom-card3>
								<div class="rounded-md shadow-md sm:w-96 bg-coolGray-900 text-coolGray-100">
									<div class="flex items-center justify-between p-3" >
										<div class="flex items-center space-x-2" >
											<img src="https://stackdiary.com/140x100.png" alt="" class="object-cover object-center w-8 h-8 rounded-full shadow-sm bg-coolGray-500 border-coolGray-700" />
											<div class="-space-y-1" >
												<h2 class="text-sm font-semibold leading-none" >
													<Link

														to={
															item.PostedBy._id !== state._id
																? `/profile/${item.PostedBy._id}`
																: "/profile"
														}
													>
														{item.PostedBy.Name}
													</Link>
												</h2>
												<span class="inline-block text-xs leading-none text-coolGray-400" >New York City</span>
											</div>
										</div>
										<button title="Open options" type="button">

										</button>
									</div>
									<img src="https://stackdiary.com/140x100.png" alt="" class="object-cover object-center w-full h-72 bg-coolGray-500" />
									<div class="p-3" >
										<img

											alt=""
											src={`data:${item.PhotoType};base64,${item.Photo}`}
										/>
									</div>
									<div class="flex flex-wrap items-center pt-3 pb-1" >
										<div class="flex items-center space-x-2">
											{/* <div class="flex -space-x-1">
												<img alt="" class="w-5 h-5 border rounded-full bg-coolGray-500 border-coolGray-800" src="https://stackdiary.com/140x100.png" />
												<img alt="" class="w-5 h-5 border rounded-full bg-coolGray-500 border-coolGray-800" src="https://stackdiary.com/140x100.png" />
												<img alt="" class="w-5 h-5 border rounded-full bg-coolGray-500 border-coolGray-800" src="https://stackdiary.com/140x100.png" />
											</div> */}
											{/* <span class="text-sm"> Liked by 
              <span class="font-semibold">Pixels</span> and 
              <span class="font-semibold">20 others</span>
            </span> */}
										</div>
									</div>
									<div class="space-y-3" >
										<p class="text-sm" >
											<span class="text-base font-semibold">	<Link

												to={
													item.PostedBy._id !== state._id
														? `/profile/${item.PostedBy._id}`
														: "/profile"
												}
											>
												{item.PostedBy.Name}
											</Link></span> {item.Body}
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