import React, { useState, useEffect } from "react";
import { ClipboardList } from "lucide-react";
import FormSection from "./FormSection";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormCheckbox from "./FormCheckbox";

interface FormData {
  nombre: string;
  edad: number;
  peso: number;
  altura: number;
  imc: number;
  hipertensionArterial: boolean;
  presionSistolica: number;
  presionDiastolica: number;
  consumoAlcohol: boolean;
  unidadesSemana: number;
  fumador: boolean;
  cigarrillosSemana: number;
  edadInicioFumar: number;
  actividadFisica: boolean;
  minutosActividad: number;
  diabetes: boolean;
  tipoDiabetes: string;
  valorDiabetes: number;
  discapacidadAuditiva: boolean;
  porcentajeDiscapacidad: number;
  contactoSocial: number;
  clasificacionContactoSocial: string;
  calidadAire: string;
  ica: number;
}

const initialFormData: FormData = {
  nombre: "",
  edad: 0,
  peso: 0,
  altura: 0,
  imc: 0,
  hipertensionArterial: false,
  presionSistolica: 0,
  presionDiastolica: 0,
  consumoAlcohol: false,
  unidadesSemana: 0,
  fumador: false,
  cigarrillosSemana: 0,
  edadInicioFumar: 0,
  actividadFisica: false,
  minutosActividad: 0,
  diabetes: false,
  tipoDiabetes: "",
  valorDiabetes: 0,
  discapacidadAuditiva: false,
  porcentajeDiscapacidad: 0,
  contactoSocial: 0,
  clasificacionContactoSocial: "",
  calidadAire: "",
  ica: 0,
};

export default function MedicalForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  useEffect(() => {
    if (formData.peso > 0 && formData.altura > 0) {
      const alturaMetros = formData.altura / 100;
      const imc = formData.peso / (alturaMetros * alturaMetros);
      setFormData((prev) => ({ ...prev, imc: Math.round(imc * 10) / 10 }));
    }
  }, [formData.peso, formData.altura]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : type === "number"
          ? Number(value) || 0
          : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex p-3 rounded-2xl bg-blue-500/10 mb-4">
            <ClipboardList className="h-12 w-12 text-blue-600" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            Formulario Médico
          </h2>
          <p className="text-gray-600">Complete la información del paciente</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <FormSection title="Información Personal">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormInput
                label="Nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
              />
              <FormInput
                label="Edad"
                name="edad"
                type="number"
                value={formData.edad}
                onChange={handleChange}
                suffix="años"
              />
            </div>
          </FormSection>

          <FormSection title="Medidas Corporales">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FormInput
                label="Peso"
                name="peso"
                type="number"
                value={formData.peso}
                onChange={handleChange}
                suffix="kg"
              />
              <FormInput
                label="Altura"
                name="altura"
                type="number"
                value={formData.altura}
                onChange={handleChange}
                suffix="cm"
              />
              <FormInput
                label="IMC"
                name="imc"
                type="number"
                value={formData.imc}
                onChange={handleChange}
                readOnly
                suffix="kg/m²"
              />
            </div>
          </FormSection>

          <FormSection title="Presión Arterial">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FormCheckbox
                label="Hipertensión Arterial"
                name="hipertensionArterial"
                checked={formData.hipertensionArterial}
                onChange={handleChange}
              />
              <FormInput
                label="P. Sistólica"
                name="presionSistolica"
                type="number"
                value={formData.presionSistolica}
                onChange={handleChange}
                suffix="mmHg"
              />
              <FormInput
                label="P. Diastólica"
                name="presionDiastolica"
                type="number"
                value={formData.presionDiastolica}
                onChange={handleChange}
                suffix="mmHg"
              />
            </div>
          </FormSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FormSection title="Hábitos - Alcohol">
              <div className="space-y-6">
                <FormCheckbox
                  label="Consumo de Alcohol"
                  name="consumoAlcohol"
                  checked={formData.consumoAlcohol}
                  onChange={handleChange}
                />
                {formData.consumoAlcohol && (
                  <FormInput
                    label="Unidades por semana"
                    name="unidadesSemana"
                    type="number"
                    value={formData.unidadesSemana}
                    onChange={handleChange}
                  />
                )}
              </div>
            </FormSection>

            <FormSection title="Hábitos - Tabaco">
              <div className="space-y-6">
                <FormCheckbox
                  label="Fumador"
                  name="fumador"
                  checked={formData.fumador}
                  onChange={handleChange}
                />
                {formData.fumador && (
                  <div className="space-y-4">
                    <FormInput
                      label="Cigarrillos por semana"
                      name="cigarrillosSemana"
                      type="number"
                      value={formData.cigarrillosSemana}
                      onChange={handleChange}
                    />
                    <FormInput
                      label="Edad de inicio"
                      name="edadInicioFumar"
                      type="number"
                      value={formData.edadInicioFumar}
                      onChange={handleChange}
                      suffix="años"
                    />
                  </div>
                )}
              </div>
            </FormSection>
          </div>

          <FormSection title="Actividad Física">
            <div className="space-y-6">
              <FormCheckbox
                label="Realiza actividad física"
                name="actividadFisica"
                checked={formData.actividadFisica}
                onChange={handleChange}
              />
              {formData.actividadFisica && (
                <FormInput
                  label="Minutos por semana"
                  name="minutosActividad"
                  type="number"
                  value={formData.minutosActividad}
                  onChange={handleChange}
                  suffix="min"
                />
              )}
            </div>
          </FormSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FormSection title="Diabetes">
              <div className="space-y-6">
                <FormCheckbox
                  label="Diabetes"
                  name="diabetes"
                  checked={formData.diabetes}
                  onChange={handleChange}
                />
                {formData.diabetes && (
                  <>
                    <FormSelect
                      label="Tipo de diabetes"
                      name="tipoDiabetes"
                      value={formData.tipoDiabetes}
                      onChange={handleChange}
                      options={[
                        { value: "tipo1", label: "Tipo 1" },
                        { value: "tipo2", label: "Tipo 2" },
                        { value: "gestacional", label: "Gestacional" },
                      ]}
                    />
                    <FormInput
                      label="Valor diabetes"
                      name="valorDiabetes"
                      type="number"
                      value={formData.valorDiabetes}
                      onChange={handleChange}
                    />
                  </>
                )}
              </div>
            </FormSection>

            <FormSection title="Discapacidad Auditiva">
              <div className="space-y-6">
                <FormCheckbox
                  label="Discapacidad Auditiva"
                  name="discapacidadAuditiva"
                  checked={formData.discapacidadAuditiva}
                  onChange={handleChange}
                />
                {formData.discapacidadAuditiva && (
                  <FormInput
                    label="Porcentaje de discapacidad"
                    name="porcentajeDiscapacidad"
                    type="number"
                    value={formData.porcentajeDiscapacidad}
                    onChange={handleChange}
                    suffix="%"
                  />
                )}
              </div>
            </FormSection>
          </div>

          <FormSection title="Otros Factores">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormInput
                label="Contacto Social"
                name="contactoSocial"
                type="number"
                value={formData.contactoSocial}
                onChange={handleChange}
                suffix="%"
              />
              <FormSelect
                label="Clasificación Contacto Social"
                name="clasificacionContactoSocial"
                value={formData.clasificacionContactoSocial}
                onChange={handleChange}
                options={[
                  { value: "bajo", label: "Bajo" },
                  { value: "medio", label: "Medio" },
                  { value: "alto", label: "Alto" },
                ]}
              />
              <FormSelect
                label="Calidad del aire"
                name="calidadAire"
                value={formData.calidadAire}
                onChange={handleChange}
                options={[
                  { value: "buena", label: "Buena" },
                  { value: "moderada", label: "Moderada" },
                  { value: "mala", label: "Mala" },
                  { value: "muy-mala", label: "Muy mala" },
                ]}
              />
              <FormInput
                label="ICA (Valor medio)"
                name="ica"
                type="number"
                value={formData.ica}
                onChange={handleChange}
              />
            </div>
          </FormSection>

          <div className="flex justify-end">
            <button
              type="submit"
              className="
                px-8 py-3 rounded-xl
                bg-gradient-to-r from-blue-600 to-blue-700
                text-white font-semibold
                shadow-lg shadow-blue-500/30
                hover:shadow-xl hover:shadow-blue-500/40
                transform hover:-translate-y-0.5
                transition-all duration-200
              "
            >
              Guardar Información
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
