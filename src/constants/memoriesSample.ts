import React from "react";

export const data = [
  {
    date: 'May 25th\n2020',
    image: require('../../assets/images/memorySample1.png'),
    title: 'Dinner\nw/Jay'
  },
  {
    date: 'May 27th\n2020',
    image: require('../../assets/images/memorySample2.png'),
    title: 'Friends'
  },
  {
    date: 'May 30th\n2020',
    image: require('../../assets/images/memorySample1.png'),
    title: 'Sweet Home'
  },
  {
    date: 'June 02th\n2020',
    image: require('../../assets/images/memorySample2.png'),
    title: 'Friends1'
  },
  {
    date: 'June 02th\n2020',
    image: require('../../assets/images/memorySample2.png'),
    title: 'Friends2'
  },
  {
    date: 'June 02th\n2020',
    image: require('../../assets/images/memorySample2.png'),
    title: 'Friends3'
  },
  {
    date: 'June 02th\n2020',
    image: require('../../assets/images/memorySample2.png'),
    title: 'Friends4'
  },
  {
    date: 'June 02th\n2020',
    image: require('../../assets/images/memorySample2.png'),
    title: 'Friends5'
  },
  {
    date: 'June 02th\n2020',
    image: require('../../assets/images/memorySample2.png'),
    title: 'Friends6'
  },
  {
    date: 'May 25th\n2020',
    image: require('../../assets/images/memorySample1.png'),
    title: 'Dinner\nw/Jay'
  },
  {
    date: 'May 25th\n2020',
    image: require('../../assets/images/memorySample1.png'),
    title: 'Dinner\nw/Jay'
  },
]

import MemoryOverviewCover from "../components/memories/MemoryOverviewCover"
import MemoryOverviewText from "../components/memories/MemoryOverviewText";
import MemoryOverviewAudio from "../components/memories/MemoryOverviewAudio";
import MemoryOverviewVideo from "../components/memories/MemoryOverviewVideo";
import MemoryOverviewPhoto from "../components/memories/MemoryOverviewPhoto";
import MemoryOverviewPhotoText from "../components/memories/MemoryOverviewPhotoText";
import MemoryOverviewVideoText from "../components/memories/MemoryOverviewVideoText";
import MemoryOverviewAudioText from "../components/memories/MemoryOverviewAudioText";

interface Props {
  index: number;
  prevIndex: number;
}

interface MemoryOverview {
  comp: ({ index }: Props) => React.JSX.Element;
  bgColor: string;
}

export const dataOverview: MemoryOverview[] = [
  {
    comp: MemoryOverviewCover,
    bgColor: '#F2F2F2'
  },
  {
    comp: MemoryOverviewText,
    bgColor: '#E9AF00'
  },
  {
    comp: MemoryOverviewAudio,
    bgColor: '#6EAC3D'
  },
  {
    comp: MemoryOverviewVideo,
    bgColor: '#6EAC3D'
  },
  {
    comp: MemoryOverviewPhoto,
    bgColor: '#6EAC3D'
  },
  {
    comp: MemoryOverviewPhotoText,
    bgColor: '#EC8002'
  },
  {
    comp: MemoryOverviewVideoText,
    bgColor: '#036BBF'
  },
  {
    comp: MemoryOverviewAudioText,
    bgColor: '#6EAC3D'
  }
]