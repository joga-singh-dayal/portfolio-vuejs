import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import ContactSection from "../src/components/ContactSection.vue";

describe("ContactSection.vue", () => {
    it('emits "openModal" event when Download CV button is clicked', async () => {
        const wrapper = mount(ContactSection, {
        global: {
            stubs: {
            "v-motion": true,
            },
        },
        });

        const button = wrapper.find("button");
        expect(button.text()).toContain("Download CV");

        await button.trigger("click");

        expect(wrapper.emitted()).toHaveProperty("openModal");
        expect(wrapper.emitted("openModal")).toHaveLength(1);
    });
});
