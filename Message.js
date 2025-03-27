// Message.js displays warnings or notifications. You will render the wrapped messages through its children props.
//STEP 3: Create Message.js (REuseable Alert Component)
function Message ({children})
{
	return (
		<div style={{color: "red", fontWeight: "bold"}}>
			{children}
		</div>
	);
}

//Message component takes in children as props
//It displays any message passed inside it, making it reuasble
//Text is red and bold to stand out
