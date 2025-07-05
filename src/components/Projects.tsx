import { ScrollAnimation } from './ScrollAnimation';
import { ProjectCard } from './ProjectCard';
import { Code, Network, Cpu } from 'lucide-react';

const projects = [
  {
    title: 'Competitive Programming',
    description: 'This repository contains my solutions to algorithmic programming problems from different online platforms / books. This is an ongoing work in-progress!',
    features: [
      'Solutions to problems from various competitive programming platforms',
      'Implemented algorithms and data structures in multiple programming languages',
      'Ongoing collection showcasing problem-solving skills and algorithmic thinking'
    ],
    githubUrl: '#',
    icon: <Code className="w-6 h-6" />
  },
  {
    title: 'Mini-Internet Development',
    subtitle: 'Course project for CSCI 551: Computer Networking, University of Southern California',
    description: 'Developed key network components of a functioning mini-Internet in C.',
    features: [
      'Implemented a router in software that receives Ethernet frames, extracts its IP payload, and forwards it based on a static routing table using longest prefix matching. Implemented basic functionality of Ethernet (link-layer), Address Resolution Protocol (ARP), Internet Protocol (IP) and Internet Control Message Protocol (ICMP).',
      'Implemented sliding-window Transmission Control Protocol (TCP) from scratch — enabling end-to-end reliable and in-order delivery of data on top of an underlying unreliable IP network. Incorporated receiver-limited flow control and basic connection teardown state machine (handling FIN segments, etc).'
    ],
    icon: <Network className="w-6 h-6" />
  },
  {
    title: 'Operating System Kernel Development',
    subtitle: 'Course project for CSCI 402: Operating Systems, University of Southern California',
    description: 'Programmed key kernel-level components in C for Weenix, a Unix-like operating system. Implemented following functionalities on a non-preemptive single-CPU (x86) architecture:',
    features: [
      'Processes: kernel process creation, waiting and destruction.',
      'Scheduler: kernel process sleep, wakeup, broadcast, cancel, cancellable sleep.',
      'Threads: kernel thread creation, cancellation and destruction.',
      'Mutex: kernel mutex initialization, lock, cancellable lock and unlock.',
      'Virtual Filesystem: pathname resolution + read, write, open, close, dup, dup2, mkdir, rmdir system calls.',
      'Virtual Memory: process-level address space (virtual memory map), page fault handling, fork system call.'
    ],
    teamSize: 3,
    teammates: ['Mahak Bansal', 'Shambhavi Jagtap'],
    icon: <Cpu className="w-6 h-6" />
  }
];

export const Projects = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="container max-w-6xl mx-auto">
        <ScrollAnimation animation="fadeInUp">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>
        </ScrollAnimation>
        
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1">
          {projects.map((project, index) => (
            <ScrollAnimation 
              key={index}
              animation="fadeInScale" 
              delay={index * 150}
            >
              <ProjectCard {...project} />
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};