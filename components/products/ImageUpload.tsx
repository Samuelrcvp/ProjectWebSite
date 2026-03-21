"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  useSortable,
  horizontalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { validateImageFile } from "@/services/firebase/storage";
import type { FormImage } from "@/types";

interface Props {
  images: FormImage[];
  onChange: (images: FormImage[]) => void;
}

interface SortableImageProps {
  img: FormImage;
  index: number;
  onRemove: (url: string) => void;
}

function SortableImage({ img, index, onRemove }: SortableImageProps) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ id: img.url });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="relative group w-24 h-24 shrink-0 cursor-grab active:cursor-grabbing overflow-hidden rounded-lg"
      {...attributes}
      {...listeners}
    >
      <Image
        src={img.url}
        alt={`Imagem ${index + 1}`}
        fill
        draggable={false}
        unoptimized
        className="object-cover rounded-lg border-2 border-transparent group-hover:border-[#9932cc] transition"
      />
      {index === 0 && (
        <span className="absolute top-1 left-1 bg-[#9932cc] text-white text-[10px] font-bold px-1 rounded">
          Principal
        </span>
      )}
      {img.file && (
        <span className="absolute bottom-1 left-1 bg-yellow-500 text-white text-[9px] font-bold px-1 rounded">
          Pendente
        </span>
      )}
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); onRemove(img.url); }}
        className="absolute top-1 right-1 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition hover:bg-red-700 cursor-pointer"
      >
        <i className="bx bx-x" />
      </button>
    </div>
  );
}

export default function ImageUpload({ images, onChange }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [errors, setErrors] = useState<string[]>([]);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } })
  );

  function handleFiles(files: FileList) {
    setErrors([]);
    const newErrors: string[] = [];
    const validFiles: File[] = [];

    Array.from(files).forEach((file) => {
      const err = validateImageFile(file);
      if (err) newErrors.push(`${file.name}: ${err}`);
      else validFiles.push(file);
    });

    if (newErrors.length) setErrors(newErrors);
    if (!validFiles.length) return;

    const newImages: FormImage[] = validFiles.map((file, i) => ({
      url: URL.createObjectURL(file),
      order: images.length + i,
      isMain: images.length === 0 && i === 0,
      file,
    }));

    onChange([...images, ...newImages]);

    if (inputRef.current) inputRef.current.value = "";
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    if (e.dataTransfer.files.length) handleFiles(e.dataTransfer.files);
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = images.findIndex((img) => img.url === active.id);
    const newIndex = images.findIndex((img) => img.url === over.id);
    const reordered = arrayMove(images, oldIndex, newIndex).map((img, i) => ({
      ...img,
      order: i,
      isMain: i === 0,
    }));
    onChange(reordered);
  }

  function handleRemove(url: string) {
    const removed = images.find((img) => img.url === url);
    if (removed?.file) URL.revokeObjectURL(url);

    const updated = images
      .filter((img) => img.url !== url)
      .map((img, i) => ({ ...img, order: i, isMain: i === 0 }));
    onChange(updated);
  }

  return (
    <div className="space-y-3">
      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        onClick={() => inputRef.current?.click()}
        className="border-2 border-dashed border-[#9932cc]/40 rounded-xl p-6 text-center cursor-pointer hover:border-[#9932cc] hover:bg-[#f3f0f6] transition-all"
      >
        <i className="bx bx-cloud-upload text-4xl text-[#9932cc]/60" />
        <p className="text-sm text-gray-500 mt-1">
          Clique ou arraste imagens (PNG, JPEG, JPG, WEBP — máx. 5MB)
        </p>
        <input
          ref={inputRef}
          type="file"
          accept="image/png,image/jpeg,image/jpg,image/webp"
          multiple
          className="hidden"
          onChange={(e) => e.target.files && handleFiles(e.target.files)}
        />
      </div>

      {errors.length > 0 && (
        <ul className="space-y-1">
          {errors.map((err, i) => (
            <li key={i} className="text-red-600 text-xs bg-red-50 rounded px-2 py-1">
              {err}
            </li>
          ))}
        </ul>
      )}

      {images.length > 0 && (
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={images.map((img) => img.url)}
            strategy={horizontalListSortingStrategy}
          >
            <div className="flex gap-3 overflow-x-auto pb-2">
              {images.map((img, i) => (
                <SortableImage
                  key={img.url}
                  img={img}
                  index={i}
                  onRemove={handleRemove}
                />
              ))}
            </div>
          </SortableContext>
        </DndContext>
      )}
      {images.length > 0 && (
        <p className="text-xs text-gray-400">
          Arraste para reordenar. A primeira imagem será a principal.
        </p>
      )}
    </div>
  );
}
