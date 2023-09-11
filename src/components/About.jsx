import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Model = () => {
  const scene = useThree((state) => state.scene);
  const animationMixer = useRef(null);

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load('/models/64ff59aab9f61ba631e49508.glb', (gltf) => {
      // Position adjustment here
      gltf.scene.position.set(0, -1.5, 0);

      animationMixer.current = new THREE.AnimationMixer(gltf.scene);
      gltf.animations.forEach((clip) => {
        animationMixer.current.clipAction(clip).play();
      });
      scene.add(gltf.scene);
    });
  }, [scene]);


  useFrame((_, delta) => {
    if (animationMixer.current) {
      animationMixer.current.update(delta);
    }
  });

  return null;
};

export default function SocialProfileWithImageHorizontal() {
  return (
    <div id="about" style={{ backgroundColor: '#00BFFF', border: 'solid black 40px' }}>
      <Center py={6}>
        <Stack
          borderWidth="1px"
          borderRadius="lg"
          w={{ sm: '100%', md: '640px' }}
          height={{ sm: '476px', md: '40rem' }}
          direction={{ base: 'column', md: 'row' }}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          padding={4}
        >
          <Flex flex={1} bg="blue.200">
          <Canvas camera={{ position: [0, 0, 1], fov: 50 }}>
  <ambientLight intensity={1.5} />
  <directionalLight position={[0, 10, 5]} intensity={1} />
  <Model />
</Canvas>

</Flex>
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={1}
          pt={2}
        >
          <Heading fontSize={"2xl"} fontFamily={"body"}>
           Hannan Shoukat
          </Heading>
          <Text fontWeight={600} color={"gray.500"} size="sm" mb={4}>
            @mirac.eth
          </Text>
          <Text
            textAlign={"center"}
            // eslint-disable-next-line react-hooks/rules-of-hooks
            color={useColorModeValue("gray.700", "gray.400")}
            px={3}
          >
Welcome to My Digital Space! With a Master's in Total Quality Management and a flair for full-stack development, I'm thrilled to unfold my prowess in cutting-edge technologies before you. My fusion of technical acumen and quality management insight bestows a distinctive outlook on how emerging tech can reshape industries. This site delves into the depths of these technologies, unveils the latest advancements, and provides insights into their transformative power for businesses and beyond          </Text>
          <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
            <Badge
              px={2}
              py={1}
              // eslint-disable-next-line react-hooks/rules-of-hooks
              bg={useColorModeValue("gray.50", "gray.800")}
              fontWeight={"400"}
            >
              #engineer
            </Badge>
            <Badge
              px={2}
              py={1}
              // eslint-disable-next-line react-hooks/rules-of-hooks
              bg={useColorModeValue("gray.50", "gray.800")}
              fontWeight={"400"}
            >
              #developer
            </Badge>
            <Badge
              px={2}
              py={1}
              // eslint-disable-next-line react-hooks/rules-of-hooks
              bg={useColorModeValue("gray.50", "gray.800")}
              fontWeight={"400"}
            >
              #tinkerer
            </Badge>
          </Stack>

          <Stack
            width={"100%"}
            mt={"2rem"}
            direction={"row"}
            padding={2}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Button
              flex={1}
              fontSize={"sm"}
              rounded={"full"}
              _focus={{
                bg: "gray.200"
              }}
              onClick={() => window.open("https://bio.link/099", "_blank")}
            >
              Message
            </Button>
            <Button
              flex={1}
              fontSize={"sm"}
              rounded={"full"}
              bg={"blue.400"}
              color={"white"}
              boxShadow={
                "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
              }
              _hover={{
                bg: "blue.500"
              }}
              _focus={{
                bg: "blue.500"
              }}
            >
              Follow
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Center>
    </div>
  )
}