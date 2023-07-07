import {
	Archive,
	Chemistry,
	SettingsAdjust,
	ShareKnowledge,
	DocumentAudio,
	Train,
	Translate,
} from '@carbon/icons-react'



const CarbonMenuList = {
	Menu: [
		{
			title: 'Posts',
			titleTranslate: 'menu.sections.blog',
			icon: DocumentAudio,
			menuItem: [
				{
					title: 'Posts',
					titleTranslate: 'menu.posts',
					link: '/posts'
				},
				{
					title: 'Comments',
					titleTranslate: 'menu.comments',
					link: '/comments'
				}
			]
		},
		{
			title: 'Photos',
			titleTranslate: 'menu.sections.photos',
			icon: SettingsAdjust,
			menuItem: [
				{
					title: 'Albums',
					titleTranslate: 'menu.albums',
					link: '/albums'
				},
				{
					title: 'Photos',
					titleTranslate: 'menu.photos',
					link: '/photos'
				}
			]
		},
	]
}


export default CarbonMenuList;