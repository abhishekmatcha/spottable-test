import React, { useState } from 'react';
import Icon from './icons.png'

const TagsInput = props => {
	const [tags, setTags] = useState(props.tags);
	const [searchItems, setSearchItems] = useState([]);

	const removeTags = tag => {
		setSearchItems([...searchItems.filter((eachTag) => eachTag !== tag)]);
		setTags([...tags, tag])
	};

	const addTags = event => {
		if (event.target.value !== "") {
			setSearchItems([...searchItems, event.target.value]);
			props.selectedTags([...searchItems, event.target.value]);
			event.target.value = "";
		}
	};

	const onClickAdd = (item) => {
		setSearchItems([...searchItems, item]);
		setTags(tags.filter((eachtag) => eachtag !== item))
	}

	//TODO: Can refactor this component by making the common for tags and seperate it based on the add and close.
	return (
		<div>
			<div className="tags-input">
				<img src={Icon} onClick={() => props.selectedTags([...searchItems])} />
				<div className='wrap-tags'>
					<ul id="tags">
						{searchItems.map((tag, index) => (
							<li key={index} className="tag">
								<span className='tag-title'>{tag}</span>
								<span className='tag-close-icon'
									onClick={() => removeTags(tag)}
								>
									x
							</span>
							</li>
						))}
					</ul>
					<input
						type="text"
						onKeyUp={event => event.key === "Enter" ? addTags(event) : null}
						placeholder="search inline and press enter"
					/>
				</div>
			</div>
			<div className='suggestions'>
				<span>Suggestions</span>
				<ul id="tags">
					{tags.map((tag, index) => (
						<li key={index} className="tag add">
							<span className='tag-title '>{tag}</span>
							<span className='tag-close-icon'
								onClick={() => onClickAdd(tag)}
							>
								+
						</span>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};


export default TagsInput;
