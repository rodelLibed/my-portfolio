"use client"

import { Button } from "@/components/ui/button";
import { Tabs } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const MotionDiv = motion(motion.div)
export const MotionList = motion(motion.li)
export const MotionImage = motion(Image)
export const MotionButton = motion(Button)
export const MotionLink = motion(Link)
export const MotionTabs = motion(Tabs)