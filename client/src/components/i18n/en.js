/* eslint-disable import/no-anonymous-default-export */

import englishMessages from 'ra-language-english'

export default {
  ...englishMessages,
  ra_custom: {
    action: {
      open: 'Open',
      close: 'Close',
      upload: 'Upload',
      import: 'Import',
    },
    notification: {
    },
    fields: {
      comments: 'Free-form text comments for this item.',
    },
    no_data: '< No Data />',
  },
  breadcrumbs: {
    root: 'Home',
  },
  copyright: 'Copyright 2023 IBM Corp.',
  menu: {
    header: 'Base Camp',
    posts: 'Posts',
    comments: 'Comments',
    albums: 'Albums',
    photos: 'Photos',
    sections: {
      blog: 'Blog',
      photos: 'Photos',
      tests: 'Tests',
      logs: 'Logs',
    },
  },
  resources: {
    
    posts: {
      name: 'Posts',
      fields: {
        id: 'Post ID',
        name: 'Post Name',
        comments: 'Comments',
        body: 'Body',
        title: 'Post Title',
        userId: 'Author'
      },
      pages: {
        create: 'New Post',
        single: 'Post',
        upload: 'Upload Posts',
      },
      no_data: 'No posts defined',
      no_data_hint: 'Create a new post',
    },
    comments: {
      name: 'Post Comments',
      fields: {
        id: 'Comment ID',
        name: 'Commentor Name',
        body: 'Comment',
        email: 'Email',
        user: 'Commenter'
      },
      pages: {
        create: 'New Comment',
        single: 'Comment',
        upload: 'Upload Comments',
      },
      no_data: 'No comments defined',
      no_data_hint: 'Create a new comment',
    },
    albums: {
      name: 'Albums',
      fields: {
        id: 'Album ID',
        name: 'Album Name',
        title: 'Album Title',
        userId: 'Album Owner'
      },
      pages: {
        create: 'New Album',
        single: 'Album',
        upload: 'Upload Albums',
      },
      no_data: 'No Albums defined',
      no_data_hint: 'Create a new Album',
    },
    photos: {
      name: 'Photos',
      fields: {
        id: 'Photo ID',
        name: 'Photo Name',
        title: 'Photo Title',
        userId: 'Photo Owner',
        url: 'Photo URL',
        thumbnailUrl: 'Photo Thumbnail'
      },
      pages: {
        create: 'New Photo',
        single: 'Photo',
        upload: 'Upload Photos',
      },
      no_data: 'No Photos defined',
      no_data_hint: 'Create a new Photo',
    },
  },
}
