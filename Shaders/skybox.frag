#version 330

in vec3 TextCoords;

out vec4 color;

uniform samplerCube skybox;

void main() {
	color = texture(skybox, TextCoords);
}