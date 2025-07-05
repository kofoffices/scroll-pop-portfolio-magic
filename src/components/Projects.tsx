import { ScrollAnimation } from './ScrollAnimation';
import { ProjectCard } from './ProjectCard';
import { DetailModal } from './DetailModal';
import { Code, Network, Cpu } from 'lucide-react';
import { useState } from 'react';

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
    icon: <Code className="w-6 h-6" />,
    modalData: {
      title: 'Competitive Programming Solutions',
      description: 'A comprehensive collection of algorithmic programming solutions from various online platforms and books.',
      overview: 'This repository serves as a comprehensive collection of my solutions to algorithmic programming problems from various competitive programming platforms including LeetCode, HackerRank, Codeforces, and others. It demonstrates problem-solving skills, algorithmic thinking, and proficiency in multiple programming languages.',
      techStack: ['C++', 'Python', 'Java', 'JavaScript', 'Algorithms', 'Data Structures'],
      features: [
        'Solutions to 500+ problems from platforms like LeetCode, HackerRank, and Codeforces',
        'Implemented fundamental algorithms: sorting, searching, graph traversal, dynamic programming',
        'Data structure implementations: trees, heaps, hash tables, graphs',
        'Well-documented code with time and space complexity analysis',
        'Organized by problem categories and difficulty levels',
        'Multiple language implementations for comparison and learning'
      ],
      links: {
        github: '#'
      },
      metrics: [
        { label: 'Problems Solved', value: '500+' },
        { label: 'Languages Used', value: '4' },
        { label: 'Platforms', value: '5+' }
      ],
      customSections: [
        {
          title: 'Problem Categories',
          content: [
            'Dynamic Programming - Complex optimization problems',
            'Graph Algorithms - BFS, DFS, shortest path, minimum spanning tree',
            'Tree Algorithms - Binary trees, BST, heap operations',
            'String Algorithms - Pattern matching, string manipulation',
            'Mathematical Problems - Number theory, combinatorics'
          ]
        }
      ]
    }
  },
  {
    title: 'Mini-Internet Development',
    subtitle: 'Course project for CSCI 551: Computer Networking, University of Southern California',
    description: 'Developed key network components of a functioning mini-Internet in C.',
    features: [
      'Implemented a router in software that receives Ethernet frames, extracts its IP payload, and forwards it based on a static routing table using longest prefix matching. Implemented basic functionality of Ethernet (link-layer), Address Resolution Protocol (ARP), Internet Protocol (IP) and Internet Control Message Protocol (ICMP).',
      'Implemented sliding-window Transmission Control Protocol (TCP) from scratch — enabling end-to-end reliable and in-order delivery of data on top of an underlying unreliable IP network. Incorporated receiver-limited flow control and basic connection teardown state machine (handling FIN segments, etc).'
    ],
    icon: <Network className="w-6 h-6" />,
    modalData: {
      title: 'Mini-Internet Development',
      subtitle: 'CSCI 551: Computer Networking Project',
      description: 'A comprehensive implementation of key networking protocols to create a functioning mini-Internet.',
      overview: 'This project involved developing fundamental network components from scratch to create a functioning mini-Internet. The implementation covers multiple layers of the network stack, from link-layer protocols to transport-layer reliability mechanisms.',
      techStack: ['C', 'Network Protocols', 'TCP/IP', 'Ethernet', 'Socket Programming'],
      features: [
        'Software Router Implementation - Receives Ethernet frames, extracts IP payload, and forwards based on routing table',
        'Longest Prefix Matching - Efficient routing table lookup algorithm implementation',
        'Link Layer Protocols - Ethernet frame handling and Address Resolution Protocol (ARP)',
        'Network Layer - Internet Protocol (IP) and Internet Control Message Protocol (ICMP)',
        'Transport Layer - Complete TCP implementation with sliding window protocol',
        'Flow Control - Receiver-limited flow control mechanisms',
        'Connection Management - TCP connection establishment and teardown state machine',
        'Reliability Features - Packet retransmission, acknowledgments, and timeout handling'
      ],
      customSections: [
        {
          title: 'Technical Implementation',
          content: [
            'Router forwards packets using static routing table with longest prefix matching',
            'ARP implementation for MAC address resolution',
            'ICMP error message generation and handling',
            'TCP sliding window protocol for reliable data transmission',
            'Connection state machine handling SYN, ACK, FIN segments'
          ]
        },
        {
          title: 'Learning Outcomes',
          content: [
            'Deep understanding of network protocol stack architecture',
            'Hands-on experience with low-level network programming',
            'Implementation of reliable communication over unreliable networks',
            'Knowledge of packet forwarding and routing mechanisms'
          ]
        }
      ],
      metrics: [
        { label: 'Protocols Implemented', value: '5' },
        { label: 'Code Lines', value: '2000+' },
        { label: 'Project Duration', value: '3 months' }
      ]
    }
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
    icon: <Cpu className="w-6 h-6" />,
    modalData: {
      title: 'Operating System Kernel Development',
      subtitle: 'CSCI 402: Operating Systems Project',
      description: 'Comprehensive kernel development project implementing core OS functionalities in Weenix.',
      overview: 'This project involved implementing key kernel-level components for Weenix, a Unix-like operating system. The implementation covers fundamental OS concepts including process management, scheduling, synchronization, filesystem operations, and virtual memory management.',
      techStack: ['C', 'x86 Assembly', 'Operating Systems', 'Kernel Programming', 'Unix'],
      features: [
        'Process Management - Kernel process creation, waiting, and destruction mechanisms',
        'Process Scheduler - Sleep, wakeup, broadcast, cancel, and cancellable sleep operations',
        'Thread Management - Kernel thread creation, cancellation, and destruction',
        'Synchronization - Mutex initialization, lock, cancellable lock, and unlock operations',
        'Virtual Filesystem - Complete VFS implementation with pathname resolution',
        'System Calls - read, write, open, close, dup, dup2, mkdir, rmdir implementations',
        'Virtual Memory - Process-level address space management and virtual memory mapping',
        'Page Fault Handling - Memory management and page fault resolution',
        'Fork System Call - Process creation and memory space duplication'
      ],
      teamSize: 3,
      teammates: ['Mahak Bansal', 'Shambhavi Jagtap'],
      customSections: [
        {
          title: 'Kernel Components',
          content: [
            'Process Control Block (PCB) management and process state transitions',
            'Round-robin scheduler with priority-based process scheduling',
            'Mutex and semaphore implementations for thread synchronization',
            'Virtual File System with inode and directory entry management',
            'Memory management unit (MMU) and page table operations'
          ]
        },
        {
          title: 'Architecture Details',
          content: [
            'Non-preemptive single-CPU (x86) architecture implementation',
            'Kernel space and user space memory separation',
            'Interrupt handling and system call interface',
            'Virtual memory mapping and address translation'
          ]
        }
      ],
      metrics: [
        { label: 'Components Implemented', value: '6' },
        { label: 'System Calls', value: '8' },
        { label: 'Team Size', value: '3' },
        { label: 'Development Time', value: '4 months' }
      ],
      quote: "This project provided deep insights into operating system internals and kernel-level programming, forming a solid foundation for systems programming."
    }
  }
];

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: any) => {
    setSelectedProject(project.modalData);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 px-6 bg-background">
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
              <ProjectCard 
                {...project} 
                onClick={() => handleProjectClick(project)}
                clickable={true}
              />
            </ScrollAnimation>
          ))}
        </div>
      </div>

      {selectedProject && (
        <DetailModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          data={selectedProject}
        />
      )}
    </section>
  );
};