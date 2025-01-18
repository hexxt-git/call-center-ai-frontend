"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setSuccess(null);
        setError(null);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, message }),
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            setSuccess("Message sent successfully!");
            setName("");
            setEmail("");
            setMessage("");
        } catch (err) {
            setError("Failed to send message.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="relative z-30 pt-16 pb-24">
            <div className="w-screen">
                <h2 className="text-3xl font-bold mb-12 text-center">Contact Us</h2>
                <motion.form
                    className="flex flex-col items-stretch max-w-[550px] mx-auto gap-4 bg-white/40 p-4 rounded-xl"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    onSubmit={handleSubmit}>
                    <motion.div variants={itemVariants}>
                        <Input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </motion.div>
                    <motion.div variants={itemVariants}>
                        <Input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </motion.div>
                    <motion.div variants={itemVariants}>
                        <Textarea
                            placeholder="Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        />
                    </motion.div>
                    {success && <p className="text-green-500">{success}</p>}
                    {error && <p className="text-red-500">{error}</p>}
                    <motion.div variants={itemVariants}>
                        <Button type="submit" className="w-full" disabled={loading}>
                            {loading ? "Sending..." : "Send"}
                        </Button>
                    </motion.div>
                </motion.form>
            </div>
        </section>
    );
}
